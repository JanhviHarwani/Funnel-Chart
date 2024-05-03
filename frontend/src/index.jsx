import React from "react";
import ReactDOM from "react-dom";
import "./index.css"; // Global styles
import App from "./App"; // Import the main App component
// import reportWebVitals from "./reportWebVitals"; // Optional, for measuring performance

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById("root") // Mounting point in the HTML
);

// Optional: reporting web vitals for performance analysis
// reportWebVitals(console.log);
