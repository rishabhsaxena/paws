import React, { useState, useEffect } from 'react';
import Layout from '~/components/Layout';
import { Button, Typography } from '@material-ui/core';
import UpsertUserModal from './UpsertUserModal';
import { fetchUsers, fetchRoles, upsertUser, removeUser } from '~/api';
import UsersList from './UsersList';
import headers from './headers';
import statuses from './statuses';

const Home = () => {
  const [isUpsertUserVisible, setUpsertUserVisible] = useState(false);
  const [roles, setRoles] = useState([]);
  const [users, setUsers] = useState([]);
  const [isAdd, setIsAdd] = useState(true);
  const [userInitialValues, setUserInitialValues] = useState({});

  useEffect(() => {
    const init = async () => {
      const { data: roles } = await fetchRoles();
      setRoles(roles);
      const { data: users } = await fetchUsers();
      setUsers(users);
    };
    init();

    return () => {};
  }, []);

  const fields = headers.filter(header => header.field !== 'actions');

  const _upsertUser = async data => {
    try {
      const { data: users } = await upsertUser(data);
      setUsers(users);
      setUpsertUserVisible(false);
    } catch (e) {
      return e.data;
    }
  };

  const _onRemove = async id => {
    const { data: users } = await removeUser({ id });
    setUsers(users.slice());
  };

  const _onClickEdit = data => {
    setUserInitialValues(data);
    setUpsertUserVisible(true);
    setIsAdd(false);
  };

  return (
    <Layout>
      <div
        style={ {
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          flexWrap: 'wrap',
          alignItems: 'center'
        } }
      >
        <Typography variant="h4">Users</Typography>
        <Button
          variant="contained"
          onClick={ () => {
            setUpsertUserVisible(true);
            setIsAdd(true);
          } }
        >
          Add User
        </Button>
      </div>
      <UpsertUserModal
        isUpsertUserVisible={ isUpsertUserVisible }
        setUpsertUserVisible={ setUpsertUserVisible }
        statuses={ statuses }
        headers={ headers }
        fields={ fields }
        roles={ roles }
        upsertUser={ _upsertUser }
        userInitialValues={ userInitialValues }
        isAdd={ isAdd }
      />
      <UsersList
        users={ users }
        headers={ headers }
        roles={ roles }
        onClickEdit={ _onClickEdit }
        onRemove={ _onRemove }
      />
    </Layout>
  );
};

export default Home;
