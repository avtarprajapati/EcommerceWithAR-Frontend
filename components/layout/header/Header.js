import React from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ProfileMenu from '../../common/popUp/ProfileMenu';
import home from './header.module.scss';
import { userLogout } from '../../../redux/actions/index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
}));

function Header(props) {
  const { isAuth, setIsAuth } = props;
  const classes = useStyles();
  const router = useRouter();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            Ecommerce AR
          </Typography>
          <div>
            {Object.keys(props.userInfo || {}).length ? (
              <ProfileMenu userInfo={props.userInfo} {...props} />
            ) : (
              <Button color='inherit' onClick={() => router.push('/login')}>
                Login
              </Button>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userInfo: state.user.userInfo,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logoutUser: () => dispatch(userLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
