import React, { Component } from "react";
import { connect } from "react-redux";

import logo from "../logo.svg";
import reduxlogo from "../redux.svg";
import "../App.css";

import Login from "./Login"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Login />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos
  };
};

export default connect(mapStateToProps, null)(App);
