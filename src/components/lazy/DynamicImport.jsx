import React, { Component } from "react";
import { memoryFn } from "../../lib/util";

export default class DynamicImport extends Component {
  state = {
    component: null
  };

  componentDidMount() {
    let { load } = this.props;

    if (typeof load === "function") {
      load = load();
    }

    load.then(mod => {
      this.setState({
        component: mod.default
      });
    });
  }

  render() {
    const { children } = this.props;
    return children(this.state.component);
  }
}

export function toDynamic(componentFunc, fallback = null) {
  if (typeof componentFunc !== "function") {
    throw new TypeError(
      'componentFunc should be a "function" which will return a promise contained a module'
    );
  }
  componentFunc = memoryFn(componentFunc);
  return function DynamicComponent(props) {
    return (
      <DynamicImport load={componentFunc}>
        {Component => {
          return Component ? <Component {...props} /> : fallback;
        }}
      </DynamicImport>
    );
  };
}
