import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);
  
  // let counter = 15;
  const addValue = ()=>{
    if (counter<20) {
      counter = counter+1;
      setCounter(counter);  
    }
  }

  const removeValue = ()=>{
    if(counter>0){
      counter = counter-1;
      setCounter(counter);
    }
  }


  return (
    <>
      <h1>Binu and react</h1>
      <h2>counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>remove value</button>
      <footer>this is footer : {counter}</footer>
    </>
  )
}

export default App
