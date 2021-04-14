/* eslint-disable */
// const stripe = require('stripe');
import { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import { getUserProducts } from '../../api/cart';
import { checkoutItem } from '../../api/checkout';
import styles from './index.module.scss';

function Cart(props) {
  const { userInfo } = props;
  const [qtyItems, setQtyItems] = useState([]);
  const [productData, setProductData] = useState([]);

  const getProductData = async () => {
    if (userInfo?._id) {
      const { data } = await getUserProducts(userInfo?._id);
      const cartsData = data.data[0].cartsData;
      setProductData(cartsData);
      const qtyData = cartsData.map((item) => 1);
      setQtyItems(qtyData);
    }
  };

  useEffect(() => {
    getProductData();
  }, [userInfo?._id]);

  const onCartIncrement = (index) => {
    const updateQty = [...qtyItems];
    updateQty[index] = updateQty[index] + 1;
    setQtyItems(updateQty);
  };

  const onCartDecrement = (index) => {
    const updateQty = [...qtyItems];
    updateQty[index] = updateQty[index] - 1;
    setQtyItems(updateQty);
  };

  const onQtyChange = (item, index) => {
    const updateQty = [...qtyItems];
    updateQty.splice(index, 1, item);
    setQtyItems(updateQty);
  };

  const onCheckout = async () => {
    try {
      const checkoutData = productData.map((item, index) => ({
        productId: item._id,
        quantity: qtyItems[index],
      }));

      console.log(userInfo._id, checkoutData);

      const { data } = await checkoutItem(userInfo._id, checkoutData);

      const stripe = Stripe(
        'pk_test_51IfReySCdPtYj5Y23V0v2NJL9oqgYbnOjudKJ0RqgSJAJFbjfGxm6qEib15EPDAlsqYtScL29rkC5zgoQCuLdKM000JTuEuexb'
      );

      const value = await stripe.redirectToCheckout({
        sessionId: data.session.id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const priceData = productData.map(
    (item, index) => item.price * qtyItems[index]
  );
  const totalPrice = priceData.reduce((acc, cur) => acc + cur, 0);

  return (
    <div className={styles.cartcontainer}>
      <Container maxWidth='lg'>
        <h4>My Carts</h4>
        <div>
          {productData.length ? (
            productData.map((item, index) => (
              <div key={`product-${item._id}`} className={styles.cartitem}>
                <model-viewer
                  height='500px'
                  src={item.imageUrl}
                  camera-controls
                  shadow-intensity='1'
                  ar
                  loading='lazy'
                  ar-modes='scene-viewer webxr quick-look'
                  camera-orbit='0.00001589deg 75deg 2.9m'
                ></model-viewer>
                <div className={styles.content}>
                  <h3>{item.title}</h3>
                  <p>Rs. {item.price}</p>
                  <div className={styles.btngrp}>
                    <button
                      onClick={() => onCartDecrement(index)}
                      className={styles.cartbtn}
                      {...(qtyItems[index] === 1 && { disabled: true })}
                    >
                      -
                    </button>
                    <input
                      type='text'
                      className={styles.cartvalue}
                      value={qtyItems[index]}
                      onChange={() => onQtyChange(qtyItems[index], index)}
                    />
                    <button
                      onClick={() => onCartIncrement(index)}
                      className={styles.cartbtn}
                      {...(qtyItems[index] >= item.quantity && {
                        disabled: true,
                      })}
                    >
                      +
                    </button>
                  </div>
                  <div className={styles.totalprice}>
                    <label>Total :</label>
                    <p>Rs. {qtyItems[index] * item.price}</p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h5>Loading....</h5>
          )}
        </div>
        <div className={styles.checkoutsection}>
          <div className={styles.checkoutprice}>
            <label>Total Price: </label>
            <span>Rs. {totalPrice}</span>
          </div>
          <Button color='primary' variant='contained' onClick={onCheckout}>
            Checkout out
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Cart;
