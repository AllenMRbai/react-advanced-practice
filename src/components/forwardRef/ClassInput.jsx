import React, { Component } from "react";

export default class ClassInput extends Component {
  sayHi = () => {
    alert("Hello everyone");
  };

  render() {
    const { forwardRef } = this.props;
    return (
      <input type="text" ref={forwardRef} placeholder="这是个类组件的input" />
    );
  }
}
