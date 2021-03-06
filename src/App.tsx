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
import ResidentPage from './components/ResidentsPage';
import RegisterStaff from './components/RegisterStaff';
import StaffPage from './components/StaffPage';
import RegisterPayment from './components/RegisterPayment';

function App() {
  const [logged] = useAuth();

  return (
    <ClientContext.Provider value={client}>
      <Router>
        {!logged && (
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <Redirect to="/login" />
          </Switch>
        )}
        {logged && (
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/residents/register">
              <RegisterResident />
            </Route>
            <Route exact path="/residents">
              <ResidentPage />
            </Route>
            <Route exact path="/staff/register">
              <RegisterStaff />
            </Route>
            <Route exact path="/staff">
              <StaffPage />
            </Route>
            <Route exact path="/alicuots">
              <RegisterPayment />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        )}
      </Router>
    </ClientContext.Provider>
  );
}

export default App;
