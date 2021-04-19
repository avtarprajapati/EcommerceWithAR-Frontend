import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import FileUpload from '../FileUpload';
import styles from './index.module.scss';

function ProductForm(props) {
  const [product, setProduct] = useState(props?.data ?? {});
  const [progress, setProgress] = useState('');
  // console.log(props.data);

  const onFileUpload = (downloadUrl, base64String) => {
    setProduct({ ...product, imageUrl: downloadUrl });
  };

  const onChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(product);
    setProduct({});
  };

  return (
    <div className={props?.btnLabel && styles.productform}>
      <Container maxWidth='md'>
        <form onSubmit={onSubmit}>
          <div>
            <FormControl>
              <TextField
                id='standard-basic'
                label='Product Type'
                name='type'
                value={product?.type || ''}
                onChange={onChange}
              />

              <FormHelperText id='my-helper-text'>
                Product type is required!
              </FormHelperText>
            </FormControl>
          </div>
          <div>
            <FormControl>
              <TextField
                id='standard-basic'
                label='Product Title'
                name='title'
                value={product?.title || ''}
                onChange={onChange}
              />

              <FormHelperText id='my-helper-text'>
                Product Title is required!
              </FormHelperText>
            </FormControl>
          </div>
          <div>
            <FormControl>
              <TextField
                id='standard-basic'
                label='Product Description'
                name='description'
                value={product?.description || ''}
                onChange={onChange}
              />

              <FormHelperText id='my-helper-text'>
                Product Description is required!
              </FormHelperText>
            </FormControl>
          </div>
          <div>
            <FormControl>
              <TextField
                id='standard-basic'
                label='Product Price'
                name='price'
                value={product?.price || ''}
                onChange={onChange}
              />

              <FormHelperText id='my-helper-text'>
                Product Price is required!
              </FormHelperText>
            </FormControl>
          </div>
          <div>
            <FormControl>
              <TextField
                id='standard-basic'
                label='Product Quantity'
                name='quantity'
                value={product?.quantity || ''}
                onChange={onChange}
              />

              <FormHelperText id='my-helper-text'>
                Product Quantity is required!
              </FormHelperText>
            </FormControl>
          </div>
          {!props?.btnLabel && (
            <div style={{ marginTop: '10px' }}>
              <FileUpload
                setProgress={setProgress}
                onFileUpload={onFileUpload}
              />
            </div>
          )}
          <Button
            color='primary'
            onClick={onSubmit}
            variant='contained'
            style={{ marginTop: '20px' }}
          >
            {props?.btnLabel ? props.btnLabel : 'Product Insert'}
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default ProductForm;
