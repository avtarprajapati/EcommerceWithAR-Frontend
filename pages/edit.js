import React from 'react';
import { connect } from 'react-redux';
import Shop from '../components/shop';
import Layout from '../components/layout';
import { getAllProduct, updateProduct, deleteProduct } from '../api/product';

function EditPage(props) {
  return (
    <Layout auth>
      <Shop
        {...props}
        heading='Admin Products Page'
        updateProduct={updateProduct}
        deleteProduct={deleteProduct}
        isAdmin={props.userInfo?.isAdmin || false}
      />
    </Layout>
  );
}

export async function getStaticProps(context) {
  try {
    const res = await getAllProduct();
    const data = await res.data.data;

    return {
      props: { data, status: 'success' },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { data: [], status: 'failed' },
    };
  }
}

const mapStateToProps = (state) => {
  return { userInfo: state.user.userInfo };
};

export default connect(mapStateToProps)(EditPage);
