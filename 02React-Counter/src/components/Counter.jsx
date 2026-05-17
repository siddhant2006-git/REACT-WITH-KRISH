import React from 'react'
import { useState } from 'react'

//useState- those hook is use to create the virtual dom and change to implement without reload page 

function Counter() {
  const [count, setCount] = useState(0)
  const onhandler = () => {
    if (count<20) {
      setCount(count + 1)

    } else {
    alert("greater than 20")

    }
  
  }
  return (
    <div>
      <p>click the Counter {count}</p>
      <button onClick={onhandler} className='counter'>clicked me</button>
    </div>

    


  )
}

export default Counter