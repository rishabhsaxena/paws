import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const SpSelect = ({ onChange, value, options, label, error }) => (
  <FormControl>
    <InputLabel style={ { minWidth: 300 } } error={ error }>
      {label}
    </InputLabel>
    <Select
      style={ { minWidth: 300 } }
      value={ value || '' }
      onChange={ onChange }
      error={ error }
    >
      {options.map(option => (
        <MenuItem key={ option.field } value={ option.field }>
          <div>{option.displayName}</div>
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default SpSelect;
