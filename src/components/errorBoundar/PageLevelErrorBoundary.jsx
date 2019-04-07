import React, { Component } from "react";

export default class PageLevelErrorBoundary extends Component {
  state = {
    hasError: false
  };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("PageError 捕获到了错误！");
    console.log(error, info);
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    if (hasError) {
      return (
        <h1 style={{ textAlign: "center", lineHeight: "300px", color: "red" }}>
          页面级别的错误
        </h1>
      );
    }

    return children;
  }
}
