/*
import React from 'react';
import { connect } from 'react-redux';

const CartSummary = ({ cartItems }) => {
  return (
    <div>
      <h2>Cart Summary</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: state.items,
  };
};

export default connect(mapStateToProps)(CartSummary);
*/

import React from "react";
import '../Styles/CartOverview.css';

export default function CartOverview () {
    return (
        <div>
            <h1>Bag</h1>
        </div>
        
    )
}

