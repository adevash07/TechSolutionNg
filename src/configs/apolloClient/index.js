import { ApolloClient, HttpLink } from "@apollo/client";
import cache from "./cache";

const BASE_URL = "http://localhost:5000/graphql";

const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: BASE_URL,
  }),
});

export default client;
