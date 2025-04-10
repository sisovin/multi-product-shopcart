import axios from 'axios';

const API_URL = '/api/cart';

const addItemToCart = async (item) => {
  try {
    const response = await axios.post(`${API_URL}/add`, item);
    return response.data;
  } catch (error) {
    console.error('Error adding item to cart:', error);
    throw error;
  }
};

const removeItemFromCart = async (itemId) => {
  try {
    const response = await axios.delete(`${API_URL}/remove/${itemId}`);
    return response.data;
  } catch (error) {
    console.error('Error removing item from cart:', error);
    throw error;
  }
};

const getCartItems = async () => {
  try {
    const response = await axios.get(`${API_URL}/items`);
    return response.data;
  } catch (error) {
    console.error('Error fetching cart items:', error);
    throw error;
  }
};

const clearCart = async () => {
  try {
    const response = await axios.post(`${API_URL}/clear`);
    return response.data;
  } catch (error) {
    console.error('Error clearing cart:', error);
    throw error;
  }
};

export { addItemToCart, removeItemFromCart, getCartItems, clearCart };
