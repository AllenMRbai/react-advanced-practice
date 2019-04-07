import React, { Component } from "react";
import "./sty.scss";

export default class Products extends Component {
  static defaultProps = {
    name: "默认名称"
  };

  render() {
    const { name, lists = [] } = this.props;
    let msgLists =
      lists && lists.length > 0 ? (
        <ul>
          {lists.map(list => {
            return <li key={list}>{list}</li>;
          })}
        </ul>
      ) : null;
    return (
      <div className="product-container">
        <div className="product-item">
          <h3>{name}</h3>
          {msgLists}
        </div>
      </div>
    );
  }
}
