import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { LandingPage } from "./Components/landingPage";
import AppLayout from "./Components/app";
import { ProtectedRoute } from "./Components/protectedRoute";
import cart from "./Components/cart";
import store from "./store";
import checkout from "./Components/checkout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <ProtectedRoute exact path="/app" component={AppLayout} />
          <ProtectedRoute exact path="/cart" component={cart} />
          <ProtectedRoute exact path="/checkout" component={checkout} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
