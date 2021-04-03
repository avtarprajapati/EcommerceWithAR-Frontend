import React, { useState, useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

export function SnackbarComp(props) {
  return (
    <Snackbar
      open={props.open}
      autoHideDuration={6000}
      onClose={props.onClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <Alert severity={props.severity} onClose={props.onClose}>
        {props.message}
      </Alert>
    </Snackbar>
  );
}

SnackbarComp.defaultProps = {
  open: false,
  message: '',
  severity: 'success',
  onClose: () => {},
};
