import React, { Component } from "react";
import Parent from "../components/portals/Parent.jsx";

export default class TestPortals extends Component {
  render() {
    return (
      <div className="card">
        <h1>测试portal组件内事件传播</h1>
        <br />
        <Parent />
      </div>
    );
  }
}
