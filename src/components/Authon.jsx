import React, { Component } from "react";

export default class Authon extends Component {
  login = () => {};
  render() {
    return (
      <div>
        <input
          type="email"
          id="email"
          ref="email"
          placeholder="Enter your email"
        />
        <br />
        <input
          type="password"
          id="password"
          ref="password"
          placeholder="Enter your password"
        />
        <br />
        <button onClick={this.login}>Login</button>
        <button>Sign In</button>
      </div>
    );
  }
}
