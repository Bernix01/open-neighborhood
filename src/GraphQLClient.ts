import { GraphQLClient } from 'graphql-hooks';

export const client = new GraphQLClient({
  url: 'http://localhost:3000/graphql',
  fetch: (...args) => fetch(...args),
});
