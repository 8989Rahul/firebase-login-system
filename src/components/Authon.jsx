import React, { Component } from "react";
var firebase = require("firebase");

const firebaseConfig = {
  apiKey: "AIzaSyBSbRrVuQfugFAeFjebieQM1FmAL1nue1k",
  authDomain: "fir-login-171f0.firebaseapp.com",
  databaseURL: "https://fir-login-171f0.firebaseio.com",
  projectId: "fir-login-171f0",
  storageBucket: "fir-login-171f0.appspot.com",
  messagingSenderId: "695855483615",
  appId: "1:695855483615:web:c15302bac30033cb"
};
firebase.initializeApp(firebaseConfig);

export default class Authon extends Component {
  login = event => {
    var email = this.refs.email.value;
    var pass = this.refs.password.value;
    console.log(email, pass);
  };
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
