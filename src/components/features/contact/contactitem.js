import React from 'react';
import './style.css';

const contactitem = ({ id, name, email }) => {
  return (
    <div className="card">
      <h1>Name:{name}</h1>
      <h2>Email:{email}</h2>
    </div>
  );
};

export default contactitem;
