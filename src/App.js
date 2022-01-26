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

  const getTexto = () => {
    // haces algo aca
    return texto
  }

  return (
    <div className="App">
      <input className= "uno" value={texto} onChange={textChange}/>
      <button onClick={handleClick}>Borrar</button>
      {/* estos dos de abajo son lo mismo */}
      <p>Texto para mostrar</p>
    </div>
  );
}

export default App;
// hacer un nuevo componente que tenga un boton y un <p> que sea un buleano pero que diga verdadero o falso con un if