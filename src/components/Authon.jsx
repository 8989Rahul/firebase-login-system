import React, { Component } from "react";
var firebase = require("firebase");

var firebaseConfig = {
  apiKey: "AIzaSyCy9rAkF5FLi_SaBtnrfqfUiXP2WRkjbBE",
  authDomain: "usurvey-b080b.firebaseapp.com",
  databaseURL: "https://usurvey-b080b.firebaseio.com",
  projectId: "usurvey-b080b",
  storageBucket: "usurvey-b080b.appspot.com",
  messagingSenderId: "386625177926",
  appId: "1:386625177926:web:26db0eb34a730a16"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default class Authon extends Component {
  state = {
    err: ""
  };

  login = event => {
    const email = this.refs.email.value;
    const pass = this.refs.password.value;
    console.log(email, pass);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, pass)
      .catch(error => {
        // Handle Errors here.
        var errorMessage = error.message;
        console.log(errorMessage, this.state);

        this.setState({
          err: errorMessage
        });
      });
  };

  signUp = () => {
    const email = this.refs.email.value;
    const pass = this.refs.password.value;
    console.log(email, pass);

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, pass)
      .then(data => {
        var err = "Welcome " + data.user.email;
        console.log(data);
        firebase
          .database()
          .ref("users/" + data.user.uid)
          .set({
            email: data.user.email
          });

        this.setState({ err: err });
      })
      .catch(error => {
        // Handle Errors here.
        var err = error.message;
        this.setState({ err: err });
      });
  };

  logOut = () => {
    firebase.auth().signOut();
    var lout = document.getElementById("logout");
    lout.classList.add("hide");
  };

  google = () => {
    console.log("hello from google");

    firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then(result => {
        var user = result.user;
        console.log(result);
        firebase
          .database()
          .ref("users/" + user.uid)
          .set({
            email: user.email,
            name: user.displayName
          });
      })
      .catch(e => {
        var msg = e.message;
        console.log(msg);
      });
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
        <p>{this.state.err}</p>
        <button onClick={this.login}>Login</button>
        <button onClick={this.signUp}>Sign In</button>
        <button id="logout" className="hide" onClick={this.logOut}>
          Log Out
        </button>
        <br />
        <button id="google" className="google" onClick={this.google}>
          Sign In With Google
        </button>
      </div>
    );
  }
}
