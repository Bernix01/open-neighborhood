import React from 'react';
import { ClientContext } from 'graphql-hooks';
import logo from './logo.svg';
import './App.css';
import PostsComponent from './components/posts';
import { client } from './GraphQLClient';
import Login from './components/LoginForm';

function App() {
  return (
    <ClientContext.Provider value={client}>
      <Login />
    </ClientContext.Provider>
  );
}

export default App;
