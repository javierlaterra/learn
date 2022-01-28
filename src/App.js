import React, { useState } from "react";
import './App.css';

function App() {
  const [texto, setTexto] = useState(true);

  const textChange = (event) => {
     setTexto(event.target.value);
  }

  const handleClick = () => {
    setTexto(!texto);
  }

  const getTexto = () => {
    // if (texto===true) return "verdadero";
    return texto ? "verdadero" : "falso";
    // return "falso";
    
  }

  return (
    <div className="App">
      <input className= "uno" value={getTexto()} onChange={setTexto} />
      <button onClick={handleClick}>cambiar</button>
      {/* estos dos de abajo son lo mismo */}
      <p>{getTexto()}</p>
    </div>
  );
}

export default App;
// hacer un nuevo componente que tenga un boton y un <p> que sea un buleano pero que diga verdadero o falso con un if