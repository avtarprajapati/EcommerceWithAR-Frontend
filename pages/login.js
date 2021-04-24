import React, { useState } from 'react';
import Layout from '../components/layout';
import SignUp from '../components/signup/SignUp';
import Login from '../components/login/Login';
import Container from '@material-ui/core/Container';

import { SnackbarComp } from '../components/common/SnackbarComp';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

function LoginPage(props) {
  const [currentPage, setCurrentPage] = useState('login');
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: '',
  });
  // const theme = useTheme();

  // const matchWidth = useMediaQuery(theme.breakpoints.up('sm'));

  const renderPage = (type) => {
    if (type === 'login') {
      return (
        <Login setCurrentPage={setCurrentPage} setSnackbar={setSnackbar} />
      );
    }
    return <SignUp setCurrentPage={setCurrentPage} setSnackbar={setSnackbar} />;
  };

  const onSnackbarClose = () => {
    setSnackbar({
      open: false,
      message: '',
      severity: '',
    });
  };

  return (
    <>
      <Layout>
        <Container maxWidth='lg'>
          <div className='login'>
            <img
              src='./static/images/shopping_cart-1.svg'
              alt='shopping cart'
              className='shopping-img'
            />
            {renderPage(currentPage)}
          </div>
        </Container>
      </Layout>
      <SnackbarComp
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={onSnackbarClose}
      />
    </>
  );
}

export default LoginPage;
