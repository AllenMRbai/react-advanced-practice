import React, { Component } from "react";

export default class ThrowError extends Component {
  state = {
    hasError: null
  };
  componentDidMount() {
    const { error } = this.props;
    if (error) {
      throw new Error("组件生命周期的Error");
    }
  }

  throwError = () => {
    this.setState({ hasError: true });
  };

  render() {
    const { hasError } = this.state;

    if (hasError) throw new Error("组件render函数内的Error");

    return (
      <div>
        <h4>可抛异常的组件</h4>
        <button onClick={this.throwError} type="button">
          抛出异常
        </button>
      </div>
    );
  }
}
