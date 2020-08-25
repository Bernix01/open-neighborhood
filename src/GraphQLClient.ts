import { GraphQLClient } from 'graphql-hooks';
import { authFetch } from './Auth';

export const client = new GraphQLClient({
  url: 'http://localhost:8000/graphql/',
  fetch: (...args) => authFetch(...args),
});
