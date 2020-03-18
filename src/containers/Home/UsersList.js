import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { pink } from '@material-ui/core/colors';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

const EditUser = ({ onClick }) => {
  return (
    <IconButton aria-label="delete" onClick={ onClick }>
      <EditIcon />
    </IconButton>
  );
};

const DeleteUser = ({ onClick }) => {
  return (
    <IconButton aria-label="delete" onClick={ onClick } className="delete-btn">
      <DeleteIcon style={{ color: pink[500] }} />
    </IconButton>
  );
};

const UserTableCell = ({ header, user, index, onRemove, onClickEdit }) => {
  return header.field !== 'actions' ? (
    <TableCell align={ [0, 1].indexOf(index) !== -1 ? 'left' : 'right' }>
      {user[header.field]}
    </TableCell>
  ) : (
    <TableCell align="right">
      <EditUser onClick={ () => onClickEdit(user) } />
      <DeleteUser onClick={ () => onRemove(user.id) } />
    </TableCell>
  );
};

export default function SimpleTable({ users, headers, onRemove, onClickEdit }) {
  const classes = useStyles();

  return (
    <TableContainer component={ Paper } style={ { marginTop: 20 } }>
      <Table className={ classes.table } aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((header, index) => (
              <TableCell
                key={ `header-${header.field}` }
                align={ [0, 1].indexOf(index) !== -1 ? 'left' : 'right' }
              >
                {header.displayName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map(user => (
            <TableRow key={ user.id }>
              {headers.map((header, index) => (
                <UserTableCell
                  key={ `${user.id}-${header.field}` }
                  { ...{
                    header,
                    index,
                    user,
                    onRemove,
                    onClickEdit
                  } }
                />
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
