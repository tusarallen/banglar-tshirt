import React from "react";

const Cart = ({ cart, handleRemoveFromCart }) => {
  let message;
  if (cart.length === 0) {
    message = <p>please add some product</p>;
  } else {
    message = (
      <div>
        <h3>Boroloxxx</h3>
        <p>
          <small>Thanks for giving your money</small>
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2>Order Summary: {cart.length}</h2>
      {cart.length > 2 ? <span>Aro Kino</span> : <span>Fokira</span>}
      {message}
      {cart.map((tshirt) => (
        <p key={tshirt._id}>
          {tshirt.name}
          <button onClick={() => handleRemoveFromCart(tshirt._id)}>
            Remove
          </button>
        </p>
      ))}
      {cart.length === 2 && <p>Double bonaza!!!</p>}
    </div>
  );
};

export default Cart;

/**
 * CONDITIONAL RENDERING
 * 1. use if else to set a variable that will contain an element,      component
 * 2. ternary operator: condition ? 'for true' : 'false'
 * 3. Logical && : (if the condition is true then the next thing will be displayed)
 * 4. Logical || : (if the condition is false then the next thing will be displayed)
 * */
