import React from 'react'
import landscape from"/workspace/to-do-list/src/img/landscape.jpg"


function Navbar() {
  return (
    <div style={{ display: "flex", backgroundImage: `url(${landscape})` , justifyContent: "center", position:"relative" }}>
        <h1 className="title" style={{ position:"start", padding: "1rem", color:"blue" }}>
        To Do List
        </h1>
    </div>
  )
}

export default Navbar