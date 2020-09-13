import { GraphQLClient } from 'graphql-hooks';
import { authFetch } from './Auth';

const csrftoken: HTMLInputElement | null = document.querySelector(
  '[name=csrfmiddlewaretoken]'
);

export const client = new GraphQLClient({
  url: 'http://localhost:8000/graphql/',
  fetch: (...args) => authFetch(...args),
  headers: { 'X-CSRFToken': csrftoken?.value ?? '' },
});
