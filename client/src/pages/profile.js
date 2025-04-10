import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { getOrderHistory } from '../services/orderService';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      if (user) {
        const orderHistory = await getOrderHistory(user.id);
        setOrders(orderHistory);
      }
    };

    fetchOrders();
  }, [user]);

  if (!user) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div>
      <Header />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Profile</h1>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <h2 className="text-xl font-bold mt-8 mb-4">Order History</h2>
        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <ul>
            {orders.map((order) => (
              <li key={order.id}>
                <p>Order ID: {order.id}</p>
                <p>Status: {order.status}</p>
                <p>Total: ${order.total}</p>
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Profile;
