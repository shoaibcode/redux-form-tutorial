import React, { Component } from "react";
import { connect } from "react-redux";
import { formValueSelector } from "redux-form"


import logo from "../logo.svg";
import reduxlogo from "../redux.svg";
import "../App.css";

import Login from "./Login"

class App extends Component {
  render() {
    const {  email, password } = this.props;
    return (
      <div className="App">
        <div className="App-header">
          <Login />
          <div>Email: {email} </div>
          <div>password: {password} </div>
        </div>
      </div>
    );
  }
}

var selector = formValueSelector('login');

const mapStateToProps = state => {
  return {
    todos: state.todos,
    email: selector(state, 'email'),
    password: selector(state, 'password')
  };
};

export default connect(mapStateToProps, null)(App);
