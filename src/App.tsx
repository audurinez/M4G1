import * as React from 'react'

import './App.css'

function App() {
  const [count,setCount] = React.useState(0);



  const myStyle ={
    backgroundColor: "yellow",
    padding: "30px",
    fontFamily: "Sans-Serif",
    color: "blue",
    fontWeight: "bold",
    fontSize: "20px",
    borderRadius: "40px"
  }

  return (
    <>
      <button type="Button" style={myStyle} >
        Click me
      </button>

    </>
  )
}

export default App
