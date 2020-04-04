import React, { Component } from "react";
import auth from "./auth";

export class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.submit = this.submit.bind(this);
  }
  submit(e) {
    console.log(this.state);
    e.preventDefault();
    var username = this.state.username;
    var password = this.state.password;
    if (username == "username" && password == "password") {
      auth.login(() => {
        this.props.history.push("/app");
      });
    }
  }
  onChange(e) {
    e.preventDefault();
    let value = e.target.value;
    this.setState({ [e.target.name]: value });
  }
  render() {
    return (
      <div>
        <h1>Landing Page</h1>
        <form onSubmit={(e) => this.submit(e)}>
          <input
            type="text"
            value={this.state.username}
            onChange={(e) => this.onChange(e)}
            name="username"
            placeholder = "username"
          />
          <input
            type="password"
            value={this.state.password}
            onChange={(e) => this.onChange(e)}
            name="password"
            placeholder="password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
