import React, { useState } from "react";
import './App.css';

function App() {
  const [texto, setTexto] = useState("forro");

  const textChange = (event) => {
     setTexto(event.target.value);
  }

  const handleClick = () => {
    setTexto("");
  }

  return (
    <div className="App">
      <input className= "uno" value={texto} onChange={textChange}/>
      <button onClick={handleClick}>Borrar</button>
    </div>
  );
}

export default App;
