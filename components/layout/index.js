import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import Header from './header/Header';
import Footer from './footer/Footer';
import Router from 'next/router';

function Layout(props) {
  const { userInfo, auth } = props;
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (props.auth) {
      if (Object.keys(userInfo || {}).length === 0) {
        // Router.push('/login');
        console.log('Please login to access');
        return true;
      } else {
        console.log('login successfully');
      }
    }
  }, [userInfo]);

  return (
    <div>
      <Header isAuth={isAuth} setIsAuth={setIsAuth} />
      <div style={{ padding: '20px 0' }}>{props.children}</div>
      {/* <Footer /> */}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.user.userInfo,
  };
};

export default connect(mapStateToProps)(Layout);
