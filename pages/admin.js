import React, { useState, useEffect } from 'react';
import Layout from '../components/layout';
import Container from '@material-ui/core/Container';
import CountDetails from '../components/count-details';
import ProductAdd from '../components/admin/product-add';
import { addProduct } from '../api/product';
import { allCount } from '../api/user';
import { SnackbarComp } from '../components/common';

function Admin(props) {
  const [allDetails, setAllDetails] = useState({});
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

  const getCountData = async () => {
    try {
      const countRes = await allCount();
      setAllDetails(countRes.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCountData();
  }, []);

  const onSubmit = async (product) => {
    try {
      const res = await addProduct(product);
      setSnackbar({
        open: true,
        message: 'Product is added',
        severity: 'success',
      });
    } catch (error) {
      setSnackbar({
        open: true,
        message: 'Product is not added',
        severity: 'error',
      });
    }
  };

  return (
    <>
      <Layout>
        <Container maxWidth='md'>
          <CountDetails allDetails={allDetails} />
          <ProductAdd onSubmit={onSubmit} />
        </Container>
      </Layout>
      <SnackbarComp
        open={snackbar.open}
        severity={snackbar.severity}
        message={snackbar.message}
        onClose={onSnackbarClose}
      />
    </>
  );
}

export default Admin;
