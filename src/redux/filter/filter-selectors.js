import { createSelector } from '@reduxjs/toolkit';
import { getAllContacts } from '../contacts/contacts-selectors';

export const getFilterValue = state => state.contacts.filter;
export const getFilteredContacts = createSelector(
  [getAllContacts, getFilterValue],
  (contacts, filter) =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase()),
    ),
);
