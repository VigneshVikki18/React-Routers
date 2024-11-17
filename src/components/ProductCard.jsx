import React from 'react';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { cart, dispatch } = useCart();
  const isInCart = cart.some(item => item.id === product.id);

  const handleCartToggle = () => {
    if (isInCart) {
      dispatch({ type: 'REMOVE_FROM_CART', payload: product });
    } else {
      dispatch({ type: 'ADD_TO_CART', payload: product });
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button onClick={handleCartToggle}>
        {isInCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;
