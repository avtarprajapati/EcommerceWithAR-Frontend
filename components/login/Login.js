import React, { useState } from 'react';
import Router from 'next/router';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import { auth } from '../../firebase';
import { userLogin } from '../../redux/actions';
import { getUserByProfileId } from '../../api/user';
import styles from './login.module.scss';

function Login(props) {
  const { setCurrentPage, setSnackbar } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(async (firebaseRes) => {
        const { data } = await getUserByProfileId(firebaseRes.user.uid);

        if (data.data.length) {
          props.userLogin({ ...data.data[0] });
          setSnackbar({
            open: true,
            message: 'Login successfully',
            severity: 'success',
          });
          Router.push('/shop');
        } else {
          setSnackbar({
            open: true,
            message: 'not any user please register first',
            severity: 'error',
          });
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Login</h2>
      <form onSubmit={handleSubmit}>
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

        <Button
          color='primary'
          variant='contained'
          className={styles.loginBtn}
          onClick={handleSubmit}
        >
          Login
        </Button>
        <p className={styles.para}>
          Not sign in please Signup first
          <Button
            color='secondary'
            variant='outlined'
            onClick={() => setCurrentPage('signup')}
            className={styles.signupBtn}
          >
            Sign-Up
          </Button>
        </p>
      </form>
    </div>
  );
}

export default connect(null, { userLogin })(Login);
