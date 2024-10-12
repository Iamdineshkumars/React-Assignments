import React from 'react'
import { useState } from 'react'
import './App.css'
const Counter = () => {
  const [count,setCount] = useState(0)
    function increment(){
        setCount(count+1)
    }
    function decrement(){
        setCount(count-1)
    }
    function double(){
        setCount(count*2)
    }
  return (
    <div>
        <h2>Counter</h2>
         <h3>{count}</h3>
         <div id ="btn_div">
                <button onClick = {increment}>+</button>
               <button onClick={decrement}>-</button>
               <button onClick={double}>Double</button>
        </div>
    </div>
  )
}

export default Counter