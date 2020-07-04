import React from 'react';
import { ClientContext } from 'graphql-hooks';
import logo from './logo.svg';
import './App.css';
import PostsComponent from './components/posts';
import { client } from './GraphQLClient';

function App() {
  return (
    <ClientContext.Provider value={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <PostsComponent />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ClientContext.Provider>
  );
}

export default App;
