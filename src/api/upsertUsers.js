import users from './users';
import { v1 as uuidv1 } from 'uuid';

const getUserIdxById = id => users.findIndex(user => user.id === id);
const updateUser = (idx, data) => users.splice(idx, 1, data);

import ValidationError from './ValidationError';

const validate = data => {
  const userIdx = users.findIndex(
    user =>
      user.email.toLowerCase() === data.email.toLowerCase() &&
      user.id !== data.id
  );
  if (userIdx !== -1) {
    return {
      email: 'Email already exists'
    };
  }
};

const upsertUsers = data => {
  const { id } = data;
  const errors = validate(data);

  if (errors) {
    throw new ValidationError('ValidationError', errors);
  }

  if (id) {
    const idx = getUserIdxById(id);
    if (idx !== -1) updateUser(idx, data);
  } else {
    users.unshift({
      ...data,
      id: uuidv1()
    });
  }
  return users;
};

export default upsertUsers;
