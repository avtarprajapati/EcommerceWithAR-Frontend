import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import ProductForm from '../common/product-form/ProductForm';
import styles from './shop.module.scss';

import { ProductCard, SnackbarComp } from '../common';

function Shop(props) {
  const { data, status, userInfo, updateProduct, deleteProduct } = props;
  const [products, setProducts] = useState(data || []);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editProduct, setEditProduct] = useState({});

  useEffect(() => {
    setProducts(data);
    console.log(data);
  }, [data]);

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

  const setEditId = async (id) => {
    handleOpen();
    const productData = data.find((item) => item._id === id);
    setEditProduct(productData);
  };

  const onEditProduct = async (updateValue) => {
    const updateRes = await updateProduct(updateValue._id, updateValue);
    setSnackbar({
      open: true,
      message: 'Product is update successfully',
      severity: 'success',
    });
    const productIndex = data.findIndex((item) => item._id === updateValue._id);
    const newProducts = [...data];
    newProducts.splice(productIndex, 1, updateValue);
    setProducts(newProducts);
    setEditProduct({});
    handleClose();
  };

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const onDelete = async (id) => {
    const deleteRes = await deleteProduct(id);

    setSnackbar({
      open: true,
      message: 'Product is deleted successfully',
      severity: 'success',
    });
    const productIndex = data.findIndex((item) => item._id === id);
    const newProducts = [...data];
    newProducts.splice(productIndex, 1);
    setProducts(newProducts);
  };

  const productRender = (data) => {
    if (!(data?.length || false)) return <h4>Not any Products</h4>;
    return data.map((product) => (
      <Grid key={product._id} item md={4} lg={4}>
        <ProductCard
          data={product}
          isAdmin={props?.isAdmin || false}
          edit={setEditId}
          delete={onDelete}
        />
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
                {productRender(products)}
              </Grid>
            ) : (
              <h4>Not any Products</h4>
            )}
          </div>
        </Container>
      </div>
      <Dialog
        open={isModalOpen}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
        className='dialog'
      >
        <ProductForm
          data={editProduct}
          btnLabel='Update'
          onSubmit={onEditProduct}
        />
      </Dialog>
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
