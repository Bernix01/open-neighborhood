import React from 'react';
import { ClientContext } from 'graphql-hooks';
import './App.css';
import { client } from './GraphQLClient';
import Home from './components/Home';

function App() {
  return (
    <ClientContext.Provider value={client}>
      <Home />
    </ClientContext.Provider>
  );
}

export default App;
