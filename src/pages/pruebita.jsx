import React from 'react';
import { useSelector } from 'react-redux';
import 

const pruebita = () => {
    const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <div>pruebita</div>
  )
}

export default pruebita