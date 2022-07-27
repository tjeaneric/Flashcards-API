import { extendType, nonNull, objectType, stringArg, booleanArg } from "nexus";

// TYPE CARD
export const Card = objectType({
  name: "Card",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("name");
    t.nonNull.string("description");
    t.nonNull.boolean("done");
    t.nonNull.dateTime("createdAt");
    t.field("createdBy", {
      type: "User",
      resolve(parent, args, context) {
        const user = context.prisma.card
          .findUnique({
            where: { id: parent.id },
          })
          .createdBy();
        return user;
      },
    });
  },
});

// CARD QUERRIES
export const CardQuery = objectType({
  name: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("cards", {
      type: "Card",
      resolve(parent, args, context) {
        return context.prisma.card.findMany();
      },
    });

    t.field("card", {
      type: "Card",
      args: { id: nonNull(stringArg()) },
      resolve(parent, args, context) {
        const card = context.prisma.card.findUnique({
          where: { id: args.id },
        });

        return card;
      },
    });
  },
});

// CARD MUTATIONS
export const CardMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("postCard", {
      type: "Card",
      args: {
        name: nonNull(stringArg()),
        description: nonNull(stringArg()),
      },
      resolve(parent, args, context) {
        //Checking if user is logged in
        const { id } = context;

        if (!id) {
          throw new Error(
            "You are not logged in!. Please log in to get access"
          );
        }

        const name = args.name.toUpperCase();
        const { description } = args;

        const newCard = context.prisma.card.create({
          data: {
            name,
            description,
            createdBy: { connect: { id } },
          },
        });
        return newCard;
      },
    });

    t.field("updateCard", {
      type: "Card",
      args: {
        id: nonNull(stringArg()),
        name: stringArg(),
        description: stringArg(),
        done: booleanArg(),
      },
      resolve(parent, args, context) {
        //Checking if user is logged in
        const { id } = context;

        if (!id) {
          throw new Error(
            "You are not logged in!. Please log in to get access"
          );
        }

        const card = context.prisma.card.update({
          where: { id: args.id },
          //@ts-ignore
          data: {
            ...args,
            name: args.name?.toUpperCase(),
          },
        });

        return card;
      },
    });

    t.field("deleteCard", {
      type: "Card",
      args: { id: nonNull(stringArg()) },
      resolve(parent, args, context) {
        //Checking if user is logged in
        const { id } = context;

        if (!id) {
          throw new Error(
            "You are not logged in!. Please log in to get access"
          );
        }

        const card = context.prisma.card.delete({
          where: { id: args.id },
        });

        return card;
      },
    });
  },
});
