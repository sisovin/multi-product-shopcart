import React from 'react';
import PropTypes from 'prop-types';
import formatPrice from '../utils/formatPrice';
import Button from './Button';

const CartItem = ({ item, onRemove }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} className="cart-item-image" />
      <div className="cart-item-details">
        <h2 className="cart-item-name">{item.name}</h2>
        <p className="cart-item-price">{formatPrice(item.price)}</p>
        <Button onClick={() => onRemove(item.id)}>Remove</Button>
      </div>
    </div>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default CartItem;
