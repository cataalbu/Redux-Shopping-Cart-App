import React, { useEffect, useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';

import Auth from './components/Auth';
import Layout from './components/Layout';
import Notification from './components/Notification';

import { showNotification } from './store/uiSlice';

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const cart = useSelector((state) => state.cart);
  const { notification } = useSelector((state) => state.ui);
  const firebaseUrl = process.env.REACT_APP_FIREBASE_URL;
  const dispatch = useDispatch();
  const [firstRender, setFirstRender] = useState(true);
  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      return;
    }
    (async () => {
      dispatch(
        showNotification({
          open: true,
          message: 'Sending request',
          type: 'warning',
        })
      );
      const res = await fetch(firebaseUrl, {
        method: 'PUT',
        body: JSON.stringify(cart),
      });
      await res.json();
      dispatch(
        showNotification({
          open: true,
          message: 'Request sent to database with success',
          type: 'success',
        })
      );
    })().catch((err) => {
      dispatch(
        showNotification({
          open: true,
          message: 'Request failed',
          type: 'error',
        })
      );
    });
  }, [cart, dispatch, firebaseUrl]);
  return (
    <div className="App">
      {notification && (
        <Notification type={notification.type} message={notification.message} />
      )}
      {!isLoggedIn ? <Auth /> : <Layout />}
    </div>
  );
}

export default App;
