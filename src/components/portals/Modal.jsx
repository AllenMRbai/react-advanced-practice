import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Model.scss";

let modelRoot = null;

if (!document.getElementById("modelRoot")) {
  modelRoot = document.createElement("div");
  modelRoot.id = "modelRoot";

  document.body.appendChild(modelRoot);
}

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.el = document.createElement("div");
  }

  componentDidMount() {
    modelRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modelRoot.removeChild(this.el);
  }

  render() {
    const { children, visible, onClose } = this.props;
    return ReactDOM.createPortal(
      <div
        onClick={onClose}
        style={{ display: visible ? "block" : "none" }}
        className="popup-mask"
      >
        <div
          onClick={evt => {
            evt.stopPropagation();
          }}
          className="popup-window"
        >
          {children}
        </div>
      </div>,
      this.el
    );
  }
}
