import React, { Children } from "react";
import Friend from "../Friend/Friend";

const Cousin = ({ children, hasFriend, ring }) => {
  console.log(children);
  return (
    <div>
      <h2>Cousin</h2>
      <p>
        <small>{children}</small>
        {hasFriend && <Friend ring={ring}></Friend>}
      </p>
    </div>
  );
};

export default Cousin;
