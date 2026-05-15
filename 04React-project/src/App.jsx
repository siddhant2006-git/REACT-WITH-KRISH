import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [name, setname] = useState("")

  return (
    <div>
      <Card name={name} setname={setname} />
      <p> hello creater: { name}</p>
      
    </div>
  )
}

export default App
