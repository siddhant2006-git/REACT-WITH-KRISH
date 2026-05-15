import { useState } from "react";

import "./App.css";
import Logout from "./components/Logout";
import Login from "./components/Login";

function App() {
  const [isloggedIn, setLoggedIn] = useState(false);


  if (!isloggedIn) {
    return (
        <Login/>
      )
      
  }
  return (
    <div>
      {isloggedIn && <Logout/>}

    </div>
  )
  

  // return (
  //   <div>
  //     {isloggedIn ? <Logout/> : <Login/>}
  //   </div>
  // )

  // if (isloggedIn ) {
  //   return (
  //     <Logout />
  //   )
  //   }
  // else {
  //   return (
  //     <Login />
  //   )
  // }
}

export default App;
