import * as jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

const secret: string = process.env.APP_SECRET!;

export interface AuthTokenPayload {
  id: string;
}

export function decodeAuthHeader(authHeader: String): AuthTokenPayload {
  const token = authHeader.replace("Bearer ", "");

  if (!token) {
    throw new Error("No token found");
  }
  return jwt.verify(token, secret) as AuthTokenPayload;
}

//Password compare function
export const correctPassword = async (
  candidatePassword: string,
  userPassword: string
) => {
  return await bcrypt.compare(candidatePassword, userPassword);
};
