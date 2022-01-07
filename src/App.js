import "./App.css";


export default function App() {
 const buttonHandler = (event) => {


  switch (event.target.id){ 
    case "c":
      console.log ("c")
      break; 
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "0":
      console.log (event.target.id)
    break;
    case "/":
    case "*":
    case "-":    
    case "+":
      console.log (event.target.id)
      break;
    case "=":
      console.log (event.target.id)
  }
}
  return (
   <div className="App">
     <input type= "text" className="result"></input>
     <div className="padre">
       <div className="fila1" > 
         <button className="c" id="c" onClick={buttonHandler}>c</button> 
         <button className="dividido" id="/" onClick={buttonHandler}>/</button> 
       </div>
       <div className="fila2" >
         <button className= "siete" id="7" onClick={buttonHandler} >7</button>
         <button className= "ocho" id="8" onClick={buttonHandler}>8</button>
         <button className= "nueve" id="9" onClick={buttonHandler}>9</button>
         <button className= "por" id="*" onClick={buttonHandler}>x</button>
       </div>
       <div className="fila3" >
        <button className= "cuatro" id="4" onClick={buttonHandler}>4</button>
        <button className= "cinco" id="5" onClick={buttonHandler}>5</button>
        <button className= "seis" id="6" onClick={buttonHandler}>6</button>
        <button className= "menos" id="-" onClick={buttonHandler}>-</button> 
       </div>
       <div className="fila4" >
        <button className= "uno" id="1" onClick={buttonHandler}>1</button>
        <button className= "dos" id="2" onClick={buttonHandler} >2</button>
        <button className= "tres" id="3" onClick={buttonHandler}>3</button>
        <button className= "mas" id="+" onClick={buttonHandler} >+</button> 
       </div>
        <div className="fila5" > 
         <button className= "cero" id="0" onClick={buttonHandler}>0</button>
         <button className= "igual" id="=" onClick={buttonHandler}>=</button>
        </div>
      </div>
   </div>
  );
}
    