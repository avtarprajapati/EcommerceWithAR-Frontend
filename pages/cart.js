import React from 'react';
import Layout from '../components/layout';
import Cart from '../components/cart';
import { connect } from 'react-redux';
import { addToCart } from '../redux/actions';

function CartPage(props) {
  return (
    <Layout auth>
      <Cart {...props} />
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return { userInfo: state.user.userInfo };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (userId, cartsData) => dispatch(addToCart(userId, cartsData)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
