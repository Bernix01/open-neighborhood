// src/mocks/handlers.js
import { graphql, rest } from 'msw';

const handlers = [
  rest.post('/login', (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem('is-authenticated', 'doe');

    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),

  // Handles a "GetUserInfo" query
  graphql.query('GetUserInfo', (req, res, ctx) => {
    const authenticatedUser = sessionStorage.getItem('is-authenticated');

    if (!authenticatedUser) {
      // When not authenticated, respond with an error

      return res(
        ctx.errors([
          {
            message: 'Not authenticated',
          },
        ])
      );
    }

    // When authenticated, respond with a query payload
    return res(
      ctx.data({
        user: {
          username: authenticatedUser,
          firstName: 'John',
        },
      })
    );
  }),
  // Handles a "GetUserInfo" query
  graphql.query('GetPosts', (req, res, ctx) =>
    res(
      ctx.data({
        posts: [
          {
            title: 'Post 1',
            author: 'Guillermo',
          },
        ],
      })
    )
  ),
];

export default handlers;
