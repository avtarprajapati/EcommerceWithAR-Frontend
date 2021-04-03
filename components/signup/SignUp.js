import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import { userSignUp } from '../../redux/actions';
import { getAllProduct } from '../../api/product';

import { auth } from '../../firebase';

import styles from './signup.module.scss';

function SignUp(props) {
  const { setCurrentPage, setSnackbar } = props;

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setSnackbar({
        open: true,
        message: "Password didn't match with confirm password",
        severity: 'error',
      });
      return false;
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(async (res) => {
        await props.userSignUp({
          firstName,
          lastName,
          email,
          profileId: res.user.uid,
        });
        props.setCurrentPage('signup');
        setSnackbar({
          open: true,
          message: 'Sign up successfully, please login to shop',
          severity: 'success',
        });
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
      })
      .catch((err) => {
        setSnackbar({
          open: true,
          message: 'Sign failed please try again',
          severity: 'error',
        });
        console.log(err);
      });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Sign up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <FormControl>
            <TextField
              id='standard-basic'
              label='Enter FirstName'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />

            <FormHelperText id='my-helper-text'>
              FirstName is required!
            </FormHelperText>
          </FormControl>
        </div>
        <div>
          <FormControl>
            <TextField
              id='standard-basic'
              label='Enter lastName'
              name='lastName'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />

            <FormHelperText id='my-helper-text'>
              LastName is required!
            </FormHelperText>
          </FormControl>
        </div>
        <div>
          <FormControl>
            <TextField
              id='standard-basic'
              label='Enter Email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <FormHelperText id='my-helper-text'>
              Email is required!
            </FormHelperText>
          </FormControl>
        </div>
        <div>
          <FormControl>
            <TextField
              id='standard-basic'
              label='Enter Password'
              name='password'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <FormHelperText id='my-helper-text'>
              Password is required!
            </FormHelperText>
          </FormControl>
        </div>
        <div>
          <FormControl>
            <TextField
              id='standard-basic'
              label='Confirm Password'
              name='confirmPassword'
              type='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />

            <FormHelperText id='my-helper-text'>
              Password is required!
            </FormHelperText>
          </FormControl>
        </div>
        <Button
          color='primary'
          variant='contained'
          className={styles.signupBtn}
          onClick={handleSubmit}
        >
          Sign-Up
        </Button>
        <p className={styles.para}>
          Already sign-in,please click to login
          <Button
            color='secondary'
            variant='outlined'
            className={styles.loginBtn}
            onClick={() => setCurrentPage('login')}
          >
            Login
          </Button>
        </p>
      </form>
    </div>
  );
}

export default connect(null, { userSignUp })(SignUp);
