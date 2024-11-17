import React from 'react';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { cart, dispatch } = useCart();

  const handleQuantityChange = (id, quantity) => {
    if (quantity === 0) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: { id } });
    } else {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
    }
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountedTotal = total * 0.9;

  return (
    <div className="cart">
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <h4>{item.title}</h4>
          <p>${item.price.toFixed(2)}</p>
          <div>
            <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
          </div>
          <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
        </div>
      ))}
      <h3>Total: ${total.toFixed(2)}</h3> <br />
      <h3> 10% Discounted Total: ${discountedTotal.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
