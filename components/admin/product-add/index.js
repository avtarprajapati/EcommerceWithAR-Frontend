import React from 'react';
import ProductForm from '../../common/product-form/ProductForm';
import Router from 'next/router';
import Button from '@material-ui/core/Button';
import styles from './index.module.scss';

function ProductAdd(props) {
  return (
    <div className={styles.productadd}>
      <div>
        <h2>Welcome, Admin</h2>
        <Button
          variant='contained'
          onClick={() => Router.push('/edit')}
          className={styles.btn}
        >
          Edit Page
        </Button>
      </div>
      <div>
        <h4 className={styles.heading}>File Upload</h4>
        <ProductForm onSubmit={props.onSubmit} />
      </div>
    </div>
  );
}

export default ProductAdd;
