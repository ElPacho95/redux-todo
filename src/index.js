import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { createStore } from "redux";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "addTask":
      return [...state, action.payload];
    case "delete":
      return state.filter((item) =>
        action.payload === item.id ? false : true
      );
    default:
      return state;
  }
};
const store = createStore(reducer);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
