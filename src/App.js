import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {LandingPage} from './Components/landingPage';
import AppLayout from './Components/app';
import {ProtectedRoute} from './Components/protectedRoute';
import cart from './Components/cart'
import store from './store'

function App() {
  return (
    <div className="App">
      <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <ProtectedRoute exact path="/app" component={AppLayout} />
          <ProtectedRoute exact path="/cart" component={cart} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
