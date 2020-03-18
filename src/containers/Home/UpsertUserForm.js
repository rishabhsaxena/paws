import { createForm } from 'rc-form';
import { TextField, Button } from '@material-ui/core';
import Styled from 'styled-components';
import React from 'react';
import Select from '~/components/Select';

const TextFieldWrapper = Styled.div`
  margin-top: 10px;
`;

const Field = ({
  fieldConfig,
  form,
  statuses,
  roles,
  getInitialValue,
  getErrors
}) => {
  const { getFieldProps } = form;
  const optionsByType = {
    role: roles,
    status: statuses
  };
  const {
    field,
    displayName,
    required
  } = fieldConfig;

  if (fieldConfig.type === 'select') {
    return (
      <Select
        { ...getFieldProps(field, {
          rules: [{ required }],
          initialValue: getInitialValue(field)
        }) }
        label={ displayName }
        error={ getErrors(field) }
        options={ optionsByType[field] }
        id={ field }
      />
    );
  }

  return (
    <TextField
      label="Standard"
      { ...getFieldProps(field, {
        rules: [{ required: true }],
        initialValue: getInitialValue(field)
      }) }
      error={ getErrors(field) }
      label={ displayName }
      style={ { minWidth: 300 } }
      id={ field }
    />
  );
};

const ActionButtons = ({ cancel, submit }) => (
  <div style={ { marginTop: 20, display: 'flex', justifyContent: 'flex-end' } }>
    <Button variant="contained" color="primary" onClick={ cancel }>
      Cancel
    </Button>
    <Button
      style={ { marginLeft: 10 } }
      variant="contained"
      color="primary"
      onClick={ submit }
    >
      Save
    </Button>
  </div>
);

const getFieldsWithErrors = (errors, values) => {
  return Object.keys(values).reduce((acc, curr) => ({
    ...acc,
    [curr]: {
      errors: [errors[curr]],
      value: values[curr]
    }
  }), {});
};

const UpsertUserForm = ({
  form,
  onSubmit,
  initialValues = {},
  fields,
  statuses,
  roles,
  cancel
}) => {
  const { getFieldError, setFields } = form;
  const _submit = () => {
    form.validateFields(async (errors, values) => {
      if (!errors) {
        const submitErrors = await onSubmit({...initialValues, ...values});
        if (!submitErrors) return;
        setFields(getFieldsWithErrors(submitErrors, values));
      }
    });
  };

  const getErrors = key => {
    const errors = getFieldError(key);
    return !!errors;
  };

  const getInitialValue = key => {
    return initialValues[key];
  };

  return (
    <div style={ { display: 'flex', flexDirection: 'column', alignItems: 'flex-end' } }>
      {fields.map(fieldConfig => (
        <TextFieldWrapper key={ `${fieldConfig.field}-wrapper` }>
          <Field
            fieldConfig={ fieldConfig }
            getErrors={ getErrors }
            getInitialValue={ getInitialValue }
            form={ form }
            statuses={ statuses }
            roles={ roles }
          />
        </TextFieldWrapper>
      ))}
      <ActionButtons cancel={ cancel } submit={ _submit } />
    </div>
  );
};

export default createForm()(UpsertUserForm);
