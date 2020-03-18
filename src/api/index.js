import roles from './roles';
import upsertUsersApi from './upsertUsers';
import removeUserApi from './removeUser';
import users from './users';

export const fetchRoles = () =>
  new Promise(resolve => resolve({ data: roles }));

export const fetchUsers = () =>
  new Promise(resolve => resolve({ data: users }));

export const upsertUser = data =>
  new Promise((resolve, reject) => {
    try {
      resolve({ data: upsertUsersApi(data) });
    } catch (e) {
      if (e.message === 'ValidationError')
        reject({data: e.data });
    }
  });

export const removeUser = data =>
  new Promise(resolve => resolve({ data: removeUserApi(data) }));
