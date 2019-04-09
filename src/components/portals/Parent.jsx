import React, { Component } from "react";
import Modal from "./Modal.jsx";
import Child from "./Child.jsx";
import "./sty.scss";

export default class Parent extends Component {
  state = {
    modelVisible: false
  };

  clickHandler = evt => {
    console.log("this is parent's clickHandler");
  };

  render() {
    const { modelVisible } = this.state;
    return (
      <div onClick={this.clickHandler}>
        <h3>Parent 组件</h3>
        <p className="tip">
          Model内部使用了ReactDOM.createPortal,Child组件在Model内，Model在Parent组件内。点击Child组件内部的按钮，触发的事件能被Parent组件捕获到，即使Model所在的节点不在Parent内部。
        </p>
        <br />
        <p className="tip">
          现在在Model的'popup-window'元素上阻止冒泡，那么点击弹窗的白色部分不会把事件冒泡到父组件了。
        </p>
        <br />
        <button
          type="button"
          onClick={() => {
            this.setState({ modelVisible: true });
          }}
        >
          触发弹窗
        </button>
        <Modal
          onClose={() => this.setState({ modelVisible: false })}
          visible={modelVisible}
        >
          <Child />
        </Modal>
      </div>
    );
  }
}
