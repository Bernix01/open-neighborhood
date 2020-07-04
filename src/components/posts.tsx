import React, { FunctionComponent } from "react";
import { useQuery } from "graphql-hooks";

const HOMEPAGE_QUERY = `query GetPosts {
    posts {
      title
      author
    }
  }`;

const PostsComponent: FunctionComponent = () => {
  const { loading, error, data } = useQuery<{
    posts: { title: string; author: string }[];
  }>(HOMEPAGE_QUERY, {
    variables: {
      limit: 10,
    },
  });

  if (loading) return <p>'Loading...'</p>;
  if (error) return <p>'Something Bad Happened'</p>;
  console.log(data);
  
  return (
    <ul>
      {data.posts.map(({ title, author }) => (
        <li key={title}>{author}</li>
      )
      )}
    </ul>
  );
};

export default PostsComponent;
