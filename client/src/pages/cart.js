import React, { useContext } from 'react';
import CartItem from '../components/CartItem';
import { CartContext } from '../contexts/CartContext';
import formatPrice from '../utils/formatPrice';
import Button from '../components/Button';

const CartPage = () => {
  const { cartItems, removeItem, clearCart } = useContext(CartContext);

  const handleCheckout = () => {
    // Implement checkout logic here
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} onRemove={removeItem} />
          ))}
          <div className="cart-summary">
            <p>Total: {formatPrice(cartItems.reduce((total, item) => total + item.price, 0))}</p>
            <Button onClick={handleCheckout}>Checkout</Button>
            <Button onClick={clearCart}>Clear Cart</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
