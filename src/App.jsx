import React, { useState } from "react";
import './App.css'
let adjustinterval= undefined;
function App(){
  const [watch,setwatch]=useState(0)
const [started,setstarted]=useState(false)

  const startwatch=()=>{
adjustinterval=setInterval(()=>{
  setwatch((x)=>x+1)
}, 1000)
setstarted(true)
  }
  const stopwatch= ()=>{
    clearInterval(adjustinterval)
    setstarted(false)
  }
  const resetwatch=()=>{
    setwatch(0)
    clearInterval(adjustinterval)
    setstarted(false)
  }
  return(
   <div className="App">
    <h1>start stop watch</h1>
    <h1>{watch}</h1>
    <button disabled={started} className="start" onClick={startwatch}>start</button>
    <button className="stop" onClick={stopwatch}>Stop</button>
    <button className="reset" onClick={resetwatch}>reset</button>
   </div>
  )
}

export default App;
