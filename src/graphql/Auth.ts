import { extendType, nonNull, objectType, stringArg } from "nexus";
import bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { correctPassword } from "../utils/auth";
import dotenv from "dotenv";

dotenv.config();

const secret: string = process.env.APP_SECRET!;

export const AuthPayload = objectType({
  name: "AuthPayload",
  definition(t) {
    t.nonNull.string("token");
    t.nonNull.field("user", {
      type: "User",
    });
  },
});

export const AuthMutation = extendType({
  type: "Mutation",
  definition(t) {
    //SIGNUP
    t.nonNull.field("signup", {
      type: "AuthPayload",
      args: {
        firstName: nonNull(stringArg()),
        lastName: nonNull(stringArg()),
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      async resolve(parent, args, context) {
        const { firstName, lastName } = args;
        const email = args.email.toLowerCase();
        //check if firstName, lastName and email are provided
        if (!firstName || !lastName || !email) {
          throw new Error("Please provide email, first name and last name");
        }
        //hash the password
        const password = await bcrypt.hash(args.password, 10);
        //create user and persist to the database
        const user = await context.prisma.user.create({
          data: { firstName, lastName, email, password },
        });
        //Generate token using jwt
        const token = jwt.sign({ id: user.id }, secret);
        //return token and created user data
        return {
          token,
          user,
        };
      },
    });
    //LOGIN
    t.nonNull.field("login", {
      type: "AuthPayload",
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      async resolve(parent, args, context) {
        const { email, password } = args;
        // 1)Check if email & password are provided
        if (!email || !password) {
          throw new Error("Please provide email and password");
        }
        // 2)Check if user exist and password is correct
        const user = await context.prisma.user.findUnique({ where: { email } });

        if (!user || !(await correctPassword(password, user.password))) {
          throw new Error("Incorrect email or password");
        }

        // 3)if everything is ok, then send token to user
        const token = jwt.sign({ id: user.id }, secret);

        return { token, user };
      },
    });
  },
});
