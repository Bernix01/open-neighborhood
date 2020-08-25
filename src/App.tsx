import React from 'react';
import { ClientContext } from 'graphql-hooks';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { client } from './GraphQLClient';
import Login from './components/login/Page';
import Home from './components/Home';
import { useAuth } from './Auth';

function App() {
  const [logged] = useAuth();
  console.log(`loggeddd ${logged}`);

  return (
    <ClientContext.Provider value={client}>
      <Switch>
        {!logged && (
          <>
            <Route path="/login">
              <Login />
            </Route>
            <Redirect to="/login" />
          </>
        )}
        {logged && (
          <>
            <Route path="/">
              <Home />
            </Route>
            <Redirect to="/" />
          </>
        )}
      </Switch>
    </ClientContext.Provider>
  );
}

export default App;
