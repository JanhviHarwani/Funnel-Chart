import React from "react";
import PopulationData from "./components/PopulationData";
import "./App.css";
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Chart Representation</h1>
      </header>
      <PopulationData />
    </div>
  );
};

export default App;
