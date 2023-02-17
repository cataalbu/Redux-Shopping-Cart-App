import React from 'react';
import { Alert } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { showNotification } from '../store/uiSlice';

const Notification = ({ type, message }) => {
  const { notification } = useSelector((state) => state.ui);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(showNotification({ open: false }));
  };
  return (
    <div>
      {notification?.open && (
        <Alert severity={type} onClose={handleClose}>
          {message}
        </Alert>
      )}
    </div>
  );
};

export default Notification;
