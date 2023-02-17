import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setShowCart } from '../store/cartSlice';
import './Cart.css';

const Cart = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const handleShowCart = () => {
    dispatch(setShowCart());
  };
  return (
    <div className="cartIcon">
      <h3 onClick={handleShowCart}>Cart: {totalQuantity} Items</h3>
    </div>
  );
};

export default Cart;
