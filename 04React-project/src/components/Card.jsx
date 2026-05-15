import React from 'react'

function Card(props) {
  return (
    <div>
      <input
        type="text"
        value={props.name}
        onChange={(e) => props.setname(e.target.value)}
      />

      <p>Hello my creator: {props.name}</p>
    </div>
  )
}

export default Card