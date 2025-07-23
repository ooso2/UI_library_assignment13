import React from "react";
import { Button } from "./components/Button/Button";
import "./components/Button/Button.module.css";

export function App() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My React App</h1>
        <Button label="Click Me" onClick={handleClick} />
      </header>
    </div>
  );
}

//export default App;
