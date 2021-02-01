import React from 'react';
import { Switch } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import ContactsView from './components/Views/ContactsView';
import HomeView from './components/Views/HomeView';
import Navigation from './components/Navigation/Navigation';
import AuthNav from './components/AuthNav/AuthNav';
import UserMenu from './components/UserMenu/UserMenu';
import RegisterView from './components/Views/RegisterView';
import LoginView from './components/Views/LoginView';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import {
  getIsLoggedIn,
  getIsFetchingCurrentUser,
} from './redux/auth/auth-selectors';
import authOperations from './redux/auth/auth-operations';

export default function App() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <header>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>

        <Switch>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>

          <PublicRoute exact path="/register" restricted redirectTo="/contacts">
            <RegisterView />
          </PublicRoute>

          <PublicRoute exact path="/login" restricted redirectTo="/contacts">
            <LoginView />
          </PublicRoute>

          <PrivateRoute path="/contacts" redirectTo="/login">
            <ContactsView />
          </PrivateRoute>
        </Switch>
      </>
    )
  );
}
