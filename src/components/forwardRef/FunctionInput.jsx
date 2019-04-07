import React from "react";

export default React.forwardRef(function FunctionInput(props, ref) {
  return (
    <input
      type="text"
      placeholder="这是个函数组件的input"
      ref={ref}
      className="functional-input"
    />
  );
});
