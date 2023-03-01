import React from 'react'
import landscape from"/workspace/to-do-list/src/img/landscape.jpg"


function Navbar() {
  return (
    <div style={{ display: "flex", backgroundImage: `url(${landscape})` }}>
        <h1 className="title" style={{ position:"start", padding: "1rem", color:"lightblue" }}>
        ToDo List
        </h1>
    </div>
  )
}

export default Navbar