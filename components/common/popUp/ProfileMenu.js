import React from 'react';
import {
  Box,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Popover,
  Avatar,
  Typography,
  Divider,
  makeStyles,
} from '@material-ui/core';
import { CgProfile } from 'react-icons/cg';
import { BiLogOut } from 'react-icons/bi';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Router from 'next/router';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '150px',
  },
  large: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    margin: 'auto',
    marginTop: '10px',
    marginBottom: '10px',
  },
  small: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
  email: {
    fontSize: 'inherit',
    letterSpacing: '.29px',
    overflow: 'hidden',
    marginBottom: '0.5rem',
  },
  icon: {
    marginRight: '5px',
  },
}));

function ProfileMenu(props) {
  const { userInfo } = props;
  const classes = useStyles();

  return (
    <PopupState variant='popover' popupId='demo-popup-menu'>
      {(popupState) => (
        <React.Fragment>
          <div>
            <IconButton {...bindTrigger(popupState)}>
              <Avatar variant='circle' className={classes.small}>
                {userInfo.firstName[0]}
              </Avatar>
            </IconButton>
          </div>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
          >
            <Box className={classes.root}>
              <Avatar variant='circular' className={classes.large}>
                {userInfo.firstName[0]}
              </Avatar>
              <Typography align='center' className={classes.email}>
                {userInfo.firstName} {userInfo.lastName}
              </Typography>
              <Divider />
              <List dense>
                <ListItem button onClick={() => Router.push('/history')}>
                  <CgProfile
                    size='20'
                    color='#6b6767'
                    className={classes.icon}
                  />
                  <ListItemText primary='History' />
                </ListItem>
                <ListItem button onClick={props.logoutUser}>
                  <BiLogOut
                    size='20'
                    color='#6b6767'
                    className={classes.icon}
                  />
                  <ListItemText primary='Logout' />
                </ListItem>
              </List>
            </Box>
          </Popover>
        </React.Fragment>
      )}
    </PopupState>
  );
}

export default ProfileMenu;
