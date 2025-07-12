// AdminPanel.jsx
import React, { useState } from 'react';

const Admin= () => {
  const [activeTab, setActiveTab] = useState('users');

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', image: 'https://via.placeholder.com/100' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', image: 'https://via.placeholder.com/100' },
  ];

  const orders = [
    { id: 1, buyer: 'John Doe', product: 'Shirt', seller: 'Jane Smith', status: 'Pending' },
    { id: 2, buyer: 'Jane Smith', product: 'Dress', seller: 'John Doe', status: 'Accepted' },
  ];

  const listings = [
    { id: 1, user: 'John Doe', image: 'https://via.placeholder.com/150' },
    { id: 2, user: 'Jane Smith', image: 'https://via.placeholder.com/150' },
  ];

  const orderHistory = [
    { id: 1, buyer: 'John Doe', product: 'Shirt', seller: 'Jane Smith', date: '2024-07-10' },
    { id: 2, buyer: 'Jane Smith', product: 'Dress', seller: 'John Doe', date: '2024-07-11' },
  ];

  return (
    <div style={{ fontFamily: 'Sen, sans-serif', backgroundColor: '#f9f9f5', height: '100vh', padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: '#5d8a53' }}>Admin Panel</h1>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <button onClick={() => setActiveTab('users')} style={tabStyle(activeTab === 'users')}>Manage User</button>
        <button onClick={() => setActiveTab('orders')} style={tabStyle(activeTab === 'orders')}>Manage Orders</button>
        <button onClick={() => setActiveTab('listings')} style={tabStyle(activeTab === 'listings')}>Manage Listings</button>
        <button onClick={() => setActiveTab('history')} style={tabStyle(activeTab === 'history')}>Order History</button>
      </div>

      {activeTab === 'users' && (
        <div style={{ display: 'grid', gap: '1rem' }}>
          {users.map(user => (
            <div key={user.id} style={cardStyle}>
              <img src={user.image} alt={user.name} style={avatarStyle} />
              <div>
                <p style={nameStyle}>{user.name}</p>
                <p style={emailStyle}>{user.email}</p>
              </div>
              <div style={{ marginLeft: 'auto' }}>
                <button style={{ ...actionButtonStyle, backgroundColor: '#ff6961' }}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'orders' && (
        <div style={{ display: 'grid', gap: '1rem' }}>
          {orders.map(order => (
            <div key={order.id} style={cardStyle}>
              <div>
                <p style={nameStyle}>Buyer: {order.buyer}</p>
                <p style={emailStyle}>Product: {order.product}</p>
                <p style={emailStyle}>From: {order.seller}</p>
                <p style={emailStyle}>Status: {order.status}</p>
              </div>
              <div style={{ marginLeft: 'auto' }}>
                <button style={actionButtonStyle}>Accept</button>
                <button style={{ ...actionButtonStyle, backgroundColor: '#ff6961' }}>Cancel</button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'listings' && (
        <div style={{ display: 'grid', gap: '1rem' }}>
          {listings.map(item => (
            <div key={item.id} style={cardStyle}>
              <img src={item.image} alt={item.user} style={{ width: '100px', height: '100px', borderRadius: '10px', objectFit: 'cover' }} />
              <div>
                <p style={nameStyle}>{item.user}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'history' && (
        <div style={{ display: 'grid', gap: '1rem' }}>
          {orderHistory.map(entry => (
            <div key={entry.id} style={cardStyle}>
              <div>
                <p style={nameStyle}>Buyer: {entry.buyer}</p>
                <p style={emailStyle}>Product: {entry.product}</p>
                <p style={emailStyle}>Seller: {entry.seller}</p>
                <p style={emailStyle}>Date: {entry.date}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const tabStyle = (active) => ({
  padding: '0.5rem 1.5rem',
  borderRadius: '8px',
  backgroundColor: active ? '#8ba96f' : '#e0e0e0',
  color: active ? 'white' : '#333',
  fontWeight: '500',
  border: 'none',
  cursor: 'pointer',
});

const cardStyle = {
  display: 'flex',
  alignItems: 'center',
  padding: '1rem',
  backgroundColor: '#fff',
  borderRadius: '12px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
};

const avatarStyle = {
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  marginRight: '1rem',
  objectFit: 'cover',
};

const nameStyle = {
  fontWeight: '600',
  margin: 0,
};

const emailStyle = {
  margin: 0,
  color: '#666',
};

const actionButtonStyle = {
  padding: '0.3rem 1rem',
  borderRadius: '6px',
  border: 'none',
  marginLeft: '0.5rem',
  fontWeight: '500',
  backgroundColor: '#5d8a53',
  color: '#fff',
  cursor: 'pointer',
};

export default Admin;
