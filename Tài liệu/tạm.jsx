import "./styles.css";
import { useState } from "react";

export default function App() {
  
  const [x, setX] = useState(1)

  const changeX = (x) => {
    setX(x)
  }

  return (
    <div className="App">
      <A changeX={changeX}/>
      <B x={x}/>
    </div>
  );
}

// menu
const A = (props) => {
  const [x, setX] = useState(1)
  return (
    <div>
      <p>A - {x}</p>
      <button onClick={() => {
        setX(prev => {
          prev += 1
          props.changeX(prev)
          return prev 
        })
      }}>Add</button>
    </div>
  )
}

// danh sach hien thi
const B = (props) => {
  return (
    <>
    <p>B - {props.x}</p>
    </>
  )
}

const C = (props) => {
  return (
   <> <p>{props.name}</p>
   <button onClick={() => {
      props.test(2)
    }}>test</button></>
  )
}