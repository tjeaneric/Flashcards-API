import { extendType, nonNull, objectType, stringArg, booleanArg } from "nexus";

// TYPE TEAM
export const Team = objectType({
  name: "Team",
  definition(t) {
    t.nonNull.string("id");
    t.nonNull.string("name");
    t.nonNull.string("description");
    t.nonNull.boolean("done");
  },
});

// TEAM QUERRIES
export const teamQuery = objectType({
  name: "Query",
  definition(t) {
    t.nonNull.list.nonNull.field("teams", {
      type: "Team",
      resolve(parent, args, context) {
        return context.prisma.team.findMany();
      },
    });

    t.field("team", {
      type: "Team",
      args: { id: nonNull(stringArg()) },
      resolve(parent, args, context) {
        const team = context.prisma.team.findUnique({
          where: { id: args.id },
        });

        return team;
      },
    });
  },
});

// TEAM MUTATIONS
export const teamMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.nonNull.field("postTeam", {
      type: "Team",
      args: {
        name: nonNull(stringArg()),
        description: nonNull(stringArg()),
      },
      resolve(parent, args, context) {
        const { name, description } = args;

        const newTeam = context.prisma.team.create({
          data: {
            name,
            description,
          },
        });
        return newTeam;
      },
    });

    t.field("updateTeam", {
      type: "Team",
      args: {
        id: nonNull(stringArg()),
        name: stringArg(),
        description: stringArg(),
        done: booleanArg(),
      },
      resolve(parent, args, context) {
        const team = context.prisma.team.update({
          where: { id: args.id },
          //@ts-ignore
          data: {
            ...args,
          },
        });

        return team;
      },
    });

    t.field("deleteTeam", {
      type: "Team",
      args: { id: nonNull(stringArg()) },
      resolve(parent, args, context) {
        const team = context.prisma.team.delete({
          where: { id: args.id },
        });

        return team;
      },
    });
  },
});
