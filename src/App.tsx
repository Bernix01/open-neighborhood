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
import NotFound from './components/NotFound';
import RegisterResident from './components/RegisterResidentPage';

function App() {
  const [logged] = useAuth();

  return (
    <ClientContext.Provider value={client}>
      <Router>
        <Switch>
          {!logged && (
            <>
              <Route exact path="/login">
                <Login />
              </Route>
              <Redirect to="/login" />
            </>
          )}
          {logged && (
            <>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/residents/register">
                <RegisterResident />
              </Route>
              <Route path="/residents">
                <Home />
              </Route>
              <Route component={NotFound} />
            </>
          )}
        </Switch>
      </Router>
    </ClientContext.Provider>
  );
}

export default App;
