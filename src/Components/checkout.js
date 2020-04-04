import React from 'react';
import store from '../store'
import styles from './components.css'

const checkout = (props) => {
    const state = store.getState();
    const price = 100 * state;
    return (
        <div>
            <h1>Hurray Your Order has Placed</h1>
            <div>
                <p>order Details</p>
                <img src={require('../images/download.jpeg')} />
                <p>Price {price}</p>
                <p>qty {state}</p>
            </div>
        </div>
    );
};

export default checkout;