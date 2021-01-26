import { createSelector } from '@reduxjs/toolkit';

export const getAllContacts = state => state.contacts.items;
export const getContactById = createSelector(
  [getAllContacts, (_, id) => id],
  (contacts, id) => contacts.find(contact => contact.id === id),
);
