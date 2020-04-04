import React, { useState } from "react";
import store from "../store";
import "./components.css";

const cart = (props) => {
  const state = store.getState();
  const price = 100 * state;

  let checkoutpage = () => {
    props.history.push("/checkout");
  };

  return (
    <div className="cartpage">
      <h1>Your Cart </h1>
      <img src={require("../images/download.jpeg")} />
      <p>
        Price <span>{price}</span>
      </p>
      <p>
        Qty <span>{state}</span>
      </p>
      <button onClick={checkoutpage}>Checkout</button>
    </div>
  );
};

export default cart;
