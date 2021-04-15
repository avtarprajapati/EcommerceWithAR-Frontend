import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Shop from '../components/shop';
import Layout from '../components/layout';
import { getBookingDataByUser } from '../api/booking';

function History(props) {
  const { userInfo } = props;
  const [productData, setProductData] = useState({});

  const getProductData = async (userId) => {
    try {
      const resData = await getBookingDataByUser(userId);
      console.log(resData);
      setProductData({ data: resData.data.data, status: 'success' });
    } catch (error) {
      setProductData({ data: [], status: 'failed' });
    }
  };

  useEffect(() => {
    if (userInfo?._id) {
      getProductData(userInfo?._id);
    }
  }, [userInfo?._id]);

  return (
    <Layout auth>
      <Shop {...productData} heading='Booking History of products' />
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return { userInfo: state.user.userInfo };
};

export default connect(mapStateToProps)(History);
