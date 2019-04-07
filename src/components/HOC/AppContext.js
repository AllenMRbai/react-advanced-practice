import React from "react";

const AppContext = React.createContext({
  user: "admin",
  id: "123",
  hobby: "running"
});

export default AppContext;
