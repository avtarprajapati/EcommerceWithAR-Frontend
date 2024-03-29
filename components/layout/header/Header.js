import React from 'react';
import { connect } from 'react-redux';
import { useRouter } from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
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
  right: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    marginRight: '5px',
  },
}));

function Header(props) {
  const { isAuth, setIsAuth } = props;
  const classes = useStyles();
  const router = useRouter();

  const carts = props.userInfo?.carts?.length;

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          {/* <div></div> */}
          <img
            alt='ecommerce'
            src='./static/images/ecommerce-logo.svg'
            width='50'
            height='50'
            className={classes.logo}
            onClick={() => router.push('/')}
          />
          <Typography
            variant='h6'
            className={classes.title}
            onClick={() => router.push('/')}
          >
            Ecommerce AR
          </Typography>
          <div>
            {Object.keys(props.userInfo || {}).length ? (
              <div className={classes.right}>
                <Button color='inherit' onClick={() => router.push('/shop')}>
                  Shop
                </Button>
                <IconButton
                  aria-label={`show ${carts} new product`}
                  color='inherit'
                  onClick={() => router.push('/cart')}
                >
                  <Badge badgeContent={carts} color='secondary'>
                    <ShoppingCartIcon />
                  </Badge>
                </IconButton>
                <ProfileMenu userInfo={props.userInfo} {...props} />
              </div>
            ) : (
              <>
                <Button color='inherit' onClick={() => router.push('/shop')}>
                  Shop
                </Button>
                <Button color='inherit' onClick={() => router.push('/login')}>
                  Login
                </Button>
              </>
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
