import React from "react";
import { ClientContext } from "graphql-hooks";
import { render, screen, } from "@testing-library/react";
import { client } from "../GraphQLClient";
import PostsComponent from "./posts";

describe("Post List", () => {
  it("should show Guillermo", async () => {
    const GraphQLProvider = ClientContext.Provider;
    render(
      <GraphQLProvider value={client}>
        <PostsComponent />
      </GraphQLProvider>
    );

    const items = await screen.findAllByRole('listitem');
 
    expect(items).toHaveLength(1);
  
  });
});
