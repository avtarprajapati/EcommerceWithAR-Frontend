import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import styles from './shop.module.scss';

import { ProductCard, SnackbarComp } from '../common';

function Shop(props) {
  const { data, status, userInfo } = props;

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: '',
  });

  const onSnackbarClose = () => {
    setSnackbar({
      open: false,
      message: '',
      severity: '',
    });
  };

  const productRender = (data) => {
    if (data.length) return <h4>Not any Products</h4>;
    return data.map((product) => (
      <Grid key={product._id} item md={4} lg={4}>
        <ProductCard data={product} />
      </Grid>
    ));
  };

  return (
    <>
      <div className={styles.shopcontainer}>
        <Container maxWidth='lg'>
          <div className={styles.heading}>
            <h2>{props.heading}</h2>
          </div>
          <div>
            {status === 'success' ? (
              <Grid container spacing={4}>
                {productRender(data)}
              </Grid>
            ) : (
              <h4>Not any Products</h4>
            )}
          </div>
        </Container>
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

export default Shop;
