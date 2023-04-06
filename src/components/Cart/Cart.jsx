import React from "react";

const Cart = ({ cart }) => {
  return (
    <div>
      <h2>Order Summary: {cart.length}</h2>
      {cart.map((tshirt) => (
        <p>{tshirt.name}</p>
      ))}
    </div>
  );
};

export default Cart;
