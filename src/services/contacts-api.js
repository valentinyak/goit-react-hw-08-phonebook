import axios from 'axios';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

export const getContacts = () => {
  const contacts = axios.get('/contacts').then(response => response.data);

  return contacts;
};
export const addContactToDB = contact => {
  axios.post('/contacts', contact);
};
export const deleteContactFromDB = contact => {
  axios.delete(`/contacts/${contact.id}`);
};
