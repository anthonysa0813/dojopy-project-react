import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Bottons from "./Bottons";

// ReactDom es como nuestro live server
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // Se comunica con nuestro index.html y le introducimos el component App
  document.getElementById("root")
);
