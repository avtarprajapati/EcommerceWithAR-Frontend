import React from 'react';
import Router from 'next/router';
import Layout from '../components/layout';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
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
        <div
          style={{
            display: 'flex',
            // justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <h4>File Upload</h4>
          <Button
            style={{ marginLeft: '10px' }}
            onClick={() => Router.push('/edit')}
          >
            Edit Page
          </Button>
        </div>

        <ProductForm onSubmit={onSubmit} />
      </Container>
    </Layout>
  );
}

export default Admin;
