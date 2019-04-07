import React from "react";

export default function HOCForwardRef(Component) {
  return React.forwardRef(function(props, ref) {
    return <Component {...props} forwardRef={ref} />;
  });
}
