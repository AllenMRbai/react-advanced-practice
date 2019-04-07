import React, { Component } from "react";

export default class ComponentLevelErrorBoundary extends Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError(err) {
    return { hasError: true };
  }

  componentDidCatch(err, info) {
    console.log("component level catch err");
    console.log(err, info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <h2 style={{ textAlign: "center", lineHeight: "100px", color: "red" }}>
          组件级别的错误
        </h2>
      );
    }

    return children;
  }
}
