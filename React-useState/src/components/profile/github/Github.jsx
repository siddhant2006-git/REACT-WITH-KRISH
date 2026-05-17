import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function Github() {

  const [data, setdata] = useState()
  useEffect(() => {
    fetch("https://api.github.com/users/siddhant2006-git")
      .then((res) => (res.json()))
      .then((data) => {
      console.log(data)
        setdata(data)
        
    })

      .catch((error) => {
      console.log(error )
      alert("error  for fetch data ")
    })

  }, [])
  
    
      
  return (
    <div>
      <h1>
        github follower :{data ? data.followers : "loding data"}
      </h1>  
      <br/>
  
      <img src={ data? data.avatar_url:"fetch data"} />
      

    </div>
  )

}


export default Github
