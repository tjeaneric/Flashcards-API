import { objectType } from "nexus";

export const User = objectType({
  name: "User",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("firstName");
    t.nonNull.string("lastName");
    t.nonNull.string("email");
    t.nonNull.list.nonNull.field("cards", {
      type: "Card",
      resolve(parent, args, context) {
        const cards = context.prisma.user
          .findUnique({
            where: {
              id: parent.id,
            },
          })
          .cards();
        return cards;
      },
    });
  },
});
