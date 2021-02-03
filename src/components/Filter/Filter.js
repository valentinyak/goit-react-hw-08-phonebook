import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import changeFilter from '../../redux/filter/filter-actions';
import { getFilterValue } from '../../redux/filter/filter-selectors';

function Filter({ value, onChange }) {
  return (
    <TextField
      label="Find contact by name"
      variant="outlined"
      size="small"
      name="filterInput"
      onChange={onChange}
      value={value}
    />
  );
}

const mapStateToProps = state => ({ value: getFilterValue(state) });

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  onChange: PropTypes.func,
};
