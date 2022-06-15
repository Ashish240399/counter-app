import "./App.css";
import React, { useState } from "react"
function App() {
  const [counter,setCounter]=useState(0)
  function changeCounter(val){
    if(counter==0 && val==-1){
      setCounter(0)
    }
    else{
      setCounter(counter+val)
    }
    
  }
  return (
    <div className="App">
      <h2 data-testid="counter-value"><h1>Counter : {counter}</h1></h2>
      <button disabled={counter==0} data-testid="counter-decrement-button" onClick={()=>{
        changeCounter(-1)
      }}>Decrement</button>
      <button data-testid="counter-increment-button" onClick={()=>{
        changeCounter(+1)
      }}>Increment</button>
    </div>
  );
}

export default App;
