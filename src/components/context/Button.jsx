import React from "react";
import ThemeContext from "./ThemeContext";

export default function Button(props) {
  const { children = "按钮" } = props;
  return (
    <ThemeContext.Consumer className="Consumer">
      {({ color, backgroundColor }) => {
        return (
          <button
            type="button"
            style={{ color, backgroundColor }}
            className="btn"
          >
            {children}
          </button>
        );
      }}
    </ThemeContext.Consumer>
  );
}
