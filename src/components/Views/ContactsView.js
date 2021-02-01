import React from 'react';
import { useSelector } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';

export default function ContactsView() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <main>
      {isLoggedIn ? (
        <>
          <h1>Phonebook</h1>
          <ContactForm />

          <h2>Contacts</h2>
          <Filter />

          <ContactList />
        </>
      ) : (
        <h1>Please, Login or Register.</h1>
      )}
    </main>
  );
}
