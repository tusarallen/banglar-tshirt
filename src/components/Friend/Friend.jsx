import React from "react";

const Friend = ({ ring }) => {
  return (
    <div>
      <h2>Friend</h2>
      <p>{ring && <small>Ring: {ring}</small>}</p>
    </div>
  );
};

export default Friend;
