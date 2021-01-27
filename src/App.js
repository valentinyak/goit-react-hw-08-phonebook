import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ContactsView from './components/Views/ContactsView';
import HomeView from './components/Views/HomeView';
import Navigation from './components/Navigation/Navigation';
import AuthNav from './components/AuthNav/AuthNav';
import UserMenu from './components/UserMenu/UserMenu';
import RegisterView from './components/Views/RegisterView';
import LoginView from './components/Views/LoginView';

export default function App() {
  return (
    <>
      <header>
        <Navigation />
        <UserMenu />
        <AuthNav />
      </header>

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={ContactsView} />
      </Switch>
    </>
  );
}
