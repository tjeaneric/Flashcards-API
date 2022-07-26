import { ApolloServer } from "apollo-server";
import schema from "./schema";
import * as dotenv from "dotenv";

dotenv.config();

const server = new ApolloServer({
  schema,
});

const port = process.env.PORT || 5000;

server.listen({ port }).then(({ url }) => {
  console.log(`Server listening at ${url}`);
});
