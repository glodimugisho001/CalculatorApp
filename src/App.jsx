import React, { useState, useRef } from "react"; 
import "./App.css"; 
 
function App() { 
  const inputRef = useRef(null); 
  const resultRef = useRef(null); 
  const [result, setResult] = useState(0); 
 
  function plus(e) { 
    e.preventDefault(); 
    const inputVal = inputRef.current.value;
    console.log("la valeur enreigistrer est: ",inputVal) 
    const newResult = result + Number(inputVal); 
    setResult(newResult); 
  } 
 
  function minus(e) { 
    e.preventDefault(); 
    const inputVal = inputRef.current.value; 
    const newResult = result - Number(inputVal); 
    setResult(newResult); 
  } 
 
  function times(e) { 
    e.preventDefault(); 
    const inputVal = inputRef.current.value; 
    const newResult = result * Number(inputVal); 
    setResult(newResult); 
  } 
 
  function divide(e) { 
    e.preventDefault(); 
    const inputVal = inputRef.current.value; 
    const newResult = result / Number(inputVal); 
    setResult(newResult); 
  } 
 
  function resetInput(e) { 
    e.preventDefault(); 
    inputRef.current.value = 0; 
  } 
 
  function resetResult(e) { 
    e.preventDefault(); 
    setResult(0); 
  } 
 
  return ( 
    <div className="App"> 
      <div> 
        <h1>Simplest Working Calculator</h1> 
      </div> 
      <form> 
        <p ref={resultRef}>{result}</p> 
        <input 
          pattern="[0-9]" 
          ref={inputRef} 
          type="number" 
          placeholder="Type a number" 
        /> 
        <button onClick={plus}>add</button> 
        <button onClick={minus}>subtract</button> 
        <button onClick={times}>multiply</button> 
        <button onClick={divide}>divide</button> 
        <button onClick={resetInput}>reset input</button> 
        <button onClick={resetResult}>reset result</button> 
      </form> 
    </div> 
    
  ); 
} 
 
export default App;