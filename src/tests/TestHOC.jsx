import React, { Component } from "react";
import AppContext from "../components/HOC/AppContext";
import UserCenter from "../components/HOC/UserCenter.jsx";

export default class TestHOC extends Component {
  render() {
    return (
      <AppContext.Provider
        value={{
          user: "allen",
          id: "147",
          hobby: "painting"
        }}
      >
        <UserCenter />
      </AppContext.Provider>
    );
  }
}
