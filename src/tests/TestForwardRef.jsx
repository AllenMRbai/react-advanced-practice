import React, { Component } from "react";
import FunctionInput from "../components/forwardRef/FunctionInput.jsx";
import ClassInput from "../components/forwardRef/ClassInput.jsx";
import HOCForwardRef from "../components/forwardRef/HOCForwardRef.jsx";
import "../components/forwardRef/sty.scss";

const CanForwardClassInput = HOCForwardRef(ClassInput);

export default class TestForwardRef extends Component {
  constructor(props) {
    super(props);
    this.functionInputRef = React.createRef();
    this.classInputRef = React.createRef();
    this.canForwardClassInputRef = React.createRef();
  }

  componentDidMount() {}

  focusInput(inputRef) {
    inputRef.current.focus();
  }

  invokeFunc(componentRef, funcName) {
    componentRef.current[funcName]();
  }

  render() {
    return (
      <div>
        <p>测试ref转发</p>
        <div className="card">
          <p className="tip">
            这是一个能forward ref的函数组件；应用的ref指向组件内的input
            dom节点，所以可以直接操作input，让input自动聚焦
          </p>
          <FunctionInput ref={this.functionInputRef} />
          <button
            type="button"
            onClick={() => this.focusInput(this.functionInputRef)}
          >
            聚焦
          </button>
        </div>
        <div className="card">
          <p className="tip">
            这个不能转发ref;应用的ref指向组件实例，我们可以通过ref来调用组件上的sayHi方法
          </p>
          <ClassInput ref={this.classInputRef} />
          <button
            type="button"
            onClick={() => this.invokeFunc(this.classInputRef, "sayHi")}
          >
            访问类组件上的方法
          </button>
        </div>
        <div className="card">
          <p className="tip">这里用高阶函数实现了类组件的ref forward</p>
          <CanForwardClassInput ref={this.canForwardClassInputRef} />
          <button
            type="button"
            onClick={() => this.focusInput(this.canForwardClassInputRef)}
          >
            聚焦
          </button>
        </div>
      </div>
    );
  }
}
