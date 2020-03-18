const headers = [
  { field: 'firstName', displayName: 'First name', required: true },
  { field: 'lastName', displayName: 'Last name', required: true },
  { field: 'email', displayName: 'Email', required: true },
  { field: 'role', displayName: 'Role', type: 'select', required: true },
  { field: 'status', displayName: 'Status', type: 'select', required: true },
  { field: 'actions', displayName: '' }
];

export default headers;
