import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { SnackbarComp } from '../common/SnackbarComp';
import styles from './index.module.scss';

function ProductView(props) {
  const { data, userInfo, addToCart, status } = props;

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

  const onCart = () => {
    const product = userInfo.carts.findIndex((item) => item === data._id);

    if (product === -1) {
      addToCart(userInfo._id, { carts: [...userInfo.carts, data._id] });
      setSnackbar({
        open: true,
        message: 'This Product added to cart',
        severity: 'success',
      });
    } else {
      setSnackbar({
        open: true,
        message: 'This Product is already added to cart',
        severity: 'success',
      });
    }
  };

  return (
    <>
      <div className={styles.productview}>
        <Container maxWidth='lg'>
          <div className={styles.heading}>
            <h3>Product View Page</h3>
          </div>
          <Grid container spacing={4}>
            <Grid item lg={6}>
              <model-viewer
                height='500px'
                src={data.imageUrl}
                camera-controls
                shadow-intensity='1'
                ar
                loading='lazy'
                ar-modes='scene-viewer webxr quick-look'
                camera-orbit='0.00001589deg 75deg 2.9m'
              ></model-viewer>
            </Grid>
            <Grid item lg={6}>
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              <p>Rs. {data.price}</p>
              <Button color='primary' variant='contained' onClick={onCart}>
                Add To Cart
              </Button>
              {/* <Button>Buy Now</Button> */}
            </Grid>
          </Grid>
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

export default ProductView;
