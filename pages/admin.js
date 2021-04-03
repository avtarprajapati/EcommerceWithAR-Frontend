import React, { useState } from 'react';
import Layout from '../components/layout';
import Container from '@material-ui/core/Container';
import ProductForm from '../components/common/product-form/ProductForm';
import { addProduct } from '../api/product';

function Admin(props) {
  const [modelUlr, setModelUlr] = useState(''); /**name, */

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
        {/* <input type='file' name='Admin' onChange={onFileChange} /> */}
        {/* {modelUlr && (
          <model-viewer
            src={modelUlr}
            camera-controls
            shadow-intensity='1'
            ar
            ar-modes='scene-viewer webxr quick-look'
            camera-orbit='0.00001589deg 75deg 2.9m'
          ></model-viewer>
        )} */}
      </Container>
    </Layout>
  );
}

export default Admin;
