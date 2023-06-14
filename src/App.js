import Register from "./component/Register";
import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <Register />
    </Provider>
  );
};

export default App;
