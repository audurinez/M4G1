
import './App.css'

function App() {




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
      <button type="button" style={myStyle} >
        Click me
      </button>

    </>
  )
}

export default App
