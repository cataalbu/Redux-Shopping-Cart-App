import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Header from './Header';
import Products from './Products';
import './Layout.css';
import CartItems from './CartItems';

const Layout = () => {
  const { showCart, itemsList } = useSelector((state) => state.cart);
  const total = itemsList.reduce((acc, curr) => acc + curr.totalPrice, 0);

  return (
    <React.Fragment>
      <div className="layout">
        <Header />
        <Products />
        {showCart && <CartItems />}
        <div className="total-price">
          <h3>Total: ${total}</h3>
          <button className="orderBtn">Place Order</button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
