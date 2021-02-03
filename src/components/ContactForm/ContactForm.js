import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import TextField from '@material-ui/core/TextField';
import { connect, useSelector } from 'react-redux';

import * as contactsActions from '../../redux/contacts/contacts-operations';
import { getAllContacts } from '../../redux/contacts/contacts-selectors';
import './ContactForm.module.css';

function ContactForm({ addContact }) {
  const state = useSelector(state => state);
  const handleSubmit = e => {
    e.preventDefault();

    const { nameInput, phoneInput } = e.currentTarget.form;
    const isContactExist = getAllContacts(state).find(
      contact => contact.name === nameInput.value,
    );

    if (isContactExist) {
      alert(`${nameInput.value} is already in contacts`);
      return;
    }

    addContact({
      id: shortid.generate(),
      name: nameInput.value,
      number: phoneInput.value,
    });

    nameInput.value = '';
    phoneInput.value = '';
  };

  return (
    <form>
      <span>Add a contact</span>

      <TextField
        label="Contact name"
        variant="outlined"
        size="small"
        name="nameInput"
        style={{ margin: '7px' }}
      />

      <TextField
        label="Contact number"
        variant="outlined"
        size="small"
        name="phoneInput"
        style={{ margin: '7px' }}
      />

      <Fab
        size="small"
        color="secondary"
        aria-label="add"
        onClick={handleSubmit}
      >
        <AddIcon />
      </Fab>
    </form>
  );
}

const mapDispatchToProps = dispatch => ({
  addContact: contact => dispatch(contactsActions.addContact(contact)),
});

export default connect(null, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  addContact: PropTypes.func,
};
