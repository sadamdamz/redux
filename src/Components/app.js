import React, { Component,useState } from "react";
import auth from "./auth";
import {useSelector, useDispatch} from 'react-redux';
import {increment,decrement} from '../actions'

 const AppLayout=(props)=> {

    const quantity = useSelector(state => state.items);
    const prices = useSelector(state => state.price);
    const dispatch = useDispatch();

  return (
    <div>
        <img src={require('../images/download.jpeg')} />
    <p>{prices}</p>
    <p>{quantity}</p>
    <button onClick={()=>dispatch(increment())}>+</button>{quantity}<button onClick={() => dispatch(decrement())}>-</button>
      <button>
        add to cart
      </button>
      <div>
      </div>
    </div>
  );
};

export default AppLayout;

// onClick={() => {
//     this.props.history.push("/cart");
// }}