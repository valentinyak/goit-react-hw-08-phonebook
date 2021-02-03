import React, { useEffect } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import ContactItem from './ContactItem/ContactItem';
import * as contactsActions from '../../redux/contacts/contacts-operations';
import * as contactsOperations from '../../redux/contacts/contacts-operations';
import { getContactById } from '../../redux/contacts/contacts-selectors';
import { getFilteredContacts } from '../../redux/filter/filter-selectors';

function ContactList({ contacts, onDelete }) {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const handleDelete = e => {
    const contact = getContactById(state, e.currentTarget.id);
    onDelete(contact);
  };

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return (
    <ul style={{ textAlign: 'left' }}>
      {contacts.map(contact => {
        return (
          <li key={contact.id}>
            <ContactItem contact={contact} onClick={handleDelete} />
          </li>
        );
      })}
    </ul>
  );
}

const mapStateToProps = state => ({
  contacts: getFilteredContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onDelete: contact => dispatch(contactsActions.deleteContact(contact)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string)),
  onClick: PropTypes.func,
};
