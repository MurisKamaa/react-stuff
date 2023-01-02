import React from 'react'
import './index.css'

export default function App() {

  const [num, setNum] = React.useState(0);

  function handleIncrement() {
    setNum(prevNum => prevNum + 1)
  }

  function handleDecrement() {
    setNum(prevNum => prevNum - 1)
  }

  return (
    <div className="container">
      <button onClick={handleIncrement}>+</button>
      <p className='number'>{num}</p>
      <button onClick={handleDecrement}>-</button>
    </div>
  )
}