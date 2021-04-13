import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import Router from 'next/router';
import Header from './header/Header';
import Footer from './footer/Footer';
import { SnackbarComp } from '../common/SnackbarComp';

function Layout(props) {
  const { userInfo, auth } = props;
  const [isAuth, setIsAuth] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: '',
  });

  useEffect(() => {
    if (props.auth) {
      if (Object.keys(userInfo || {}).length === 0) {
        // Router.push('/login');
        console.log('Please login to access');
        // setSnackbar({
        //   open: true,
        //   message: 'Please login to buy something',
        //   severity: 'success',
        // });
        return true;
      } else {
        console.log('login successfully');
      }
    }
  }, [userInfo]);

  const onSnackbarClose = () => {
    setSnackbar({
      open: false,
      message: '',
      severity: '',
    });
  };

  return (
    <>
      <div>
        <Header isAuth={isAuth} setIsAuth={setIsAuth} />
        <div style={{ padding: '20px 0' }}>{props.children}</div>
        {/* <Footer /> */}
      </div>
      <SnackbarComp
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={onSnackbarClose}
      />
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.user.userInfo,
  };
};

export default connect(mapStateToProps)(Layout);
