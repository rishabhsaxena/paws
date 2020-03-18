import users from './users';

const getUserIdxById = id => users.find(user => user.id === id);

const removeUser = id => {
  const idx = getUserIdxById(id);
  if (idx !== -1) {
    users.sp;
    users.splice(idx, 1);
  }
  return users;
};

export default removeUser;
