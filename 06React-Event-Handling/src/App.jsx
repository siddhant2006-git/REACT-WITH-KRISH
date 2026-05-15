
import './App.css'

function App() {

  let mousehandle = () => {
    alert("fetch the data of the wind ")
  }

  function onhandle(e) {
    console.log("value of ", e.target.value )
  }
  function submit(e) {
  e.preventDefault()
    alert("form can be submit")

  }

  return (
    <div>
      <form>
      <input tyoe="text" onChange={onhandle}   />
        <p onClick={mousehandle}>hello my creater</p>
        <button type='submit' onClick={submit}>submit</button>
      </form>
      
    </div>
  )
}

export default App
