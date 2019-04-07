import React, { Component } from "react";
import "./App.css";
import TestLazyLoad from "./tests/TestLazyLoad.jsx";
import Base from "./layout/Base.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Base />
      </div>
    );
  }
}

export default App;
