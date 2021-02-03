import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

export default function ContactItem({ contact, onClick }) {
  const { name, number, id } = contact;

  return (
    <span>
      {name}: {number}{' '}
      <IconButton
        aria-label="delete"
        style={{ width: '5px', height: '5px' }}
        id={id}
        onClick={onClick}
      >
        <DeleteIcon />
      </IconButton>
    </span>
  );
}

ContactItem.propTypes = {
  contact: PropTypes.objectOf(PropTypes.string),
  onClick: PropTypes.func,
};
