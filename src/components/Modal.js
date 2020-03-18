import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    // width: '100%',
    // maxWidth: theme.breakpoints.values.sm,
    backgroundColor: theme.palette.background.paper,
    // border: "1px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    outline: 0
  }
}));

export default function SimpleModal({ children, isVisible, onCancel }) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);

  return (
    <Modal
      open={ isVisible }
      onClose={ onCancel }
    >
      <div style={ modalStyle } className={ classes.paper }>
        {children}
      </div>
    </Modal>
  );
}
