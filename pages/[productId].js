import React from 'react';
import ProductView from '../components/product-view';
import Layout from '../components/layout';
import { connect } from 'react-redux';
import { getAllProduct, getProductById } from '../api/product';
import { addToCart } from '../redux/actions';

function ProductViewPage(props) {
  return (
    <Layout auth>
      <ProductView {...props} />
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    const res = await getAllProduct();
    const data = await res.data.data;

    const paths = data.map((product) => ({
      params: { productId: product._id },
    }));

    return { paths, fallback: false };
  } catch (error) {
    console.log(error);
    return { paths, fallback: false };
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await getProductById(params.productId);
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

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (userId, cartsData) => dispatch(addToCart(userId, cartsData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductViewPage);
