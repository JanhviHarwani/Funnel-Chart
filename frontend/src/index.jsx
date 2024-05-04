import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Global styles
import App from "./App"; // Import the main App component

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root") // Mounting point in the HTML
);
