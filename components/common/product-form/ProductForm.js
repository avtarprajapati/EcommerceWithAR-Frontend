import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';
import FileUpload from '../FileUpload';

function ProductForm(props) {
  const [product, setProduct] = useState({});
  const [progress, setProgress] = useState('');

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
    <div>
      <Container maxWidth='md'>
        <form onSubmit={onSubmit}>
          <div>
            <FormControl>
              <TextField
                id='standard-basic'
                label='Product Type'
                name='type'
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
                onChange={onChange}
              />

              <FormHelperText id='my-helper-text'>
                Product Quantity is required!
              </FormHelperText>
            </FormControl>
          </div>
          <div>
            <FileUpload setProgress={setProgress} onFileUpload={onFileUpload} />
          </div>
          <Button
            color='primary'
            onClick={onSubmit}
            style={{ marginTop: '10px' }}
          >
            Product Insert
          </Button>
        </form>
      </Container>
    </div>
  );
}

export default ProductForm;
