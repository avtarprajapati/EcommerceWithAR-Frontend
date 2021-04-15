import React from 'react';
import { connect } from 'react-redux';
import Shop from '../components/shop';
import Layout from '../components/layout';
import { getAllProduct } from '../api/product';

function ShopPage(props) {
  return (
    <Layout auth>
      <Shop {...props} heading='Shopping All Product' />
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

export default connect(mapStateToProps)(ShopPage);
