import React, { createContext, useState } from "react";
import Father from "../Father/Father";
import Uncle from "../Uncle/Uncle";
import Aunty from "../Aunty/Aunty";
import "./Grandpa.css";

export const RingContext = createContext("gold");
export const MoneyContext = createContext(0);

const Grandpa = () => {
  const ring = "diamond";
  const [money, setMoney] = useState(0);

  return (
    <div className="grandpa">
      <h2>Grandpa</h2>
      <p>Has Money: {money}</p>
      <MoneyContext.Provider value={[money, setMoney]}>
        <RingContext.Provider value="Golden Ring">
          <section className="flex">
            <Father ring={ring} />
            <Uncle />
            <Aunty ring={ring} />
          </section>
        </RingContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;

/**
 * CONTEXT API
 * 1. create a context and export
 * 2. create a provider and pass a value
 * 3. use useContext to receive the value
 * */
