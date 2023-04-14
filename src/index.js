import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import CurrentDataState from "./Context/TodaysData/CurrentDataState";
import PastDataState from './Context/PastData/PastDataState'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <CurrentDataState>
    <PastDataState>
      <App />
      </PastDataState>
  </CurrentDataState>
);
