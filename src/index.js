import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { StateProvider } from "./components/context/StateProvider";
import { inistialState } from "./components/context/initalState";
import reducer from "./components/context/reducer";

ReactDOM.render(
  <Router>
    <StateProvider initialState={inistialState} reducer={reducer}>
      <App />
    </StateProvider>
  </Router>,

  document.getElementById("root")
);
