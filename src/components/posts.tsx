import React from 'react';
import { useQuery } from 'graphql-hooks';

const HOMEPAGE_QUERY = `query GetPosts {
    posts {
      title
      author
    }
  }`;

const PostsComponent: React.FunctionComponent = () => {
  const { loading, error, data } = useQuery<{
    posts: { title: string; author: string }[];
  }>(HOMEPAGE_QUERY, {
    variables: {
      limit: 10,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something Bad Happened</p>;

  return (
    <ul>
      {data.posts.map(({ title, author }) => (
        <li key={title}>{author}</li>
      ))}
    </ul>
  );
};

export default PostsComponent;
