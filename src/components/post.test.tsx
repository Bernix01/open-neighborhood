import React from 'react';
import { ClientContext } from 'graphql-hooks';
import { render, screen } from '@testing-library/react';
import PostsComponent from './posts';
import { client } from '../GraphQLClient';

describe('Post List', () => {
  it('should show Guillermo', async () => {
    render(
      <ClientContext.Provider value={client}>
        <PostsComponent />
      </ClientContext.Provider>
    );

    const items = await screen.findAllByRole('listitem');

    expect(items).toHaveLength(1);
  });
});
