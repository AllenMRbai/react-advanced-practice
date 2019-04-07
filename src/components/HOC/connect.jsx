import React from "react";
import AppContext from "./AppContext";

export default function connect(mapStateToProps) {
  return function(Component) {
    function connected(props) {
      return (
        <AppContext.Consumer>
          {context => {
            return <Component {...{ ...props, ...mapStateToProps(context) }} />;
          }}
        </AppContext.Consumer>
      );
    }

    let name = Component.displayName || Component.name;
    connected.displayName = `connected(${name})`;
    return connected;
  };
}
