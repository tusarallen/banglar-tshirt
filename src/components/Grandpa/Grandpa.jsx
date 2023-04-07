import React from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";

const Grandpa = () => {
  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <section className="flex">
        <Father />
        <Uncle />
        <Aunty />
      </section>
    </div>
  );
};

export default Grandpa;
