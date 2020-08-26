import React from 'react';
import { ClientContext } from 'graphql-hooks';
import './App.css';
import {
  Route,
  Switch,
  Redirect,
  BrowserRouter as Router,
} from 'react-router-dom';
import { client } from './GraphQLClient';
import Login from './components/login/Page';
import Home from './components/HomePage';
import { useAuth } from './Auth';

function App() {
  const [logged] = useAuth();

  return (
    <ClientContext.Provider value={client}>
      <Router>
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
      </Router>
    </ClientContext.Provider>
  );
}

export default App;
