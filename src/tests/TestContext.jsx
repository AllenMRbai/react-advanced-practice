import React, { Component } from "react";
import MiddleComponent from "../components/context/MiddleComponent.jsx";
import ThemeContext from "../components/context/ThemeContext";
import "../components/context/sty.scss";

export default class TestContext extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#fff",
      backgroundColor: "blue"
    };

    this.colorInput = React.createRef();
    this.backgroundColorInput = React.createRef();
  }

  changeTheme = evt => {
    this.setState({
      color: this.colorInput.current.value,
      backgroundColor: this.backgroundColorInput.current.value
    });
  };

  render() {
    const { color, backgroundColor } = this.state;
    return (
      <ThemeContext.Provider
        value={{
          color,
          backgroundColor
        }}
      >
        <div className="card">
          <p>这个页面测试context</p>

          <div style={{ padding: "10px", marginBottom: "10px" }}>
            <label htmlFor="color">
              字体色：
              <input
                defaultValue={color}
                ref={this.colorInput}
                type="text"
                name="color"
              />
            </label>
            <br />
            <label htmlFor="backgroundColor">
              背景色：
              <input
                ref={this.backgroundColorInput}
                defaultValue={backgroundColor}
                type="text"
                name="backgroundColor"
              />
            </label>
            <br />
            <button onClick={this.changeTheme} type="button">
              改变样式
            </button>
          </div>

          <MiddleComponent />
        </div>
      </ThemeContext.Provider>
    );
  }
}
