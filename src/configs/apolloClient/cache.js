import { InMemoryCache } from "@apollo/client";
import {
  educationVar,
  talentVar,
} from "pages/userProfile/graphql/reactiveVariables";

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        educationVar: {
          read() {
            return educationVar();
          },
        },
        talentVar: {
          read() {
            return talentVar();
          },
        },
      },
    },
  },
});
export default cache;
