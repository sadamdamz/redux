import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions";
import store from "../store";
import "./components.css";
const AppLayout = (props) => {
  const [price, setPrice] = useState(100);
  const [isadded, setAdd] = useState(false);
  const quantity = useSelector((state) => state);
  const dispatch = useDispatch();
  const state = store.getState();

  let add = () => {
    dispatch(increment());
    console.log(price);
    setPrice(price + 100);
  };
  let sub = () => {
    if(price>100){
    dispatch(decrement());
    }
    console.log("ddd");
    if (price > 100) {
      setPrice(price - 100);
    }
  };
  let cart = () => {
    if (quantity >= 1) {
      setAdd(true);
    }
  };
  let cartpage = () => {
    if(isadded){
    props.history.push("/cart");
    }
  };
  return (
    <React.Fragment>
      <div onClick={cartpage} className="cartButton">
        CART {isadded ? "(1)" : ""}
      </div>
      <p>{quantity ? "" : "Please increase qty"}</p>
      <div>
        <div className="productpage">
          <img src={require("../images/download.jpeg")} />
          <p>Price: {price}</p>
          <button onClick={add}>+</button>
          {quantity} qty<button onClick={sub}>-</button>
          <button onClick={cart} className="addcart">
            add to cart
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default AppLayout;
