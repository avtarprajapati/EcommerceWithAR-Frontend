import React, { useState } from 'react';
import Layout from '../components/layout';
import Container from '@material-ui/core/Container';
import ProductForm from '../components/common/product-form/ProductForm';
import { addProduct } from '../api/product';

function Admin(props) {
  const onSubmit = async (product) => {
    console.log(product);
    const res = await addProduct(product);
    console.log(res);
  };

  return (
    <Layout>
      <Container maxWidth='md'>
        <h4>File Upload</h4>
        <ProductForm onSubmit={onSubmit} />
      </Container>
    </Layout>
  );
}

export default Admin;
