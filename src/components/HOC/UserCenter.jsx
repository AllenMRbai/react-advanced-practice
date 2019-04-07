import React, { Component } from "react";
import connect from "./connect.jsx";

class UserCenter extends Component {
  render() {
    const { user, id, hobby } = this.props;
    return (
      <div>
        <div>name：{user}</div>
        <div>id：{id}</div>
        <div>hobby：{hobby}</div>
      </div>
    );
  }
}

export default connect(state => state)(UserCenter);
