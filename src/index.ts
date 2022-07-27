import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";
import schema from "./schema";
import { context } from "./context";
import * as dotenv from "dotenv";

dotenv.config();

const server = new ApolloServer({
  schema,
  context,
  introspection: true,
  plugins: [ApolloServerPluginLandingPageLocalDefault()],
});

const port = process.env.PORT || 5000;

server.listen({ port }).then(({ url }) => {
  console.log(`Server listening at ${url}`);
});
