import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Result from './Result'

const secretNum = Math.floor(Math.random()*10);
function App() {
  const [number, setNumber] = useState(0)

  const handleChange = (e) =>{
    setNumber(e.target.value);
  }

  return (
    <>
    <div className="container">
      <div className="head">
        <label htmlFor="">Guess the Number between 1 to 10
        </label>
      </div>
      <input type="text" name="number" id="number" onChange={handleChange} />
      <Result data = {{secretNum: secretNum, guessNumber: number}}/>    
    </div>
    </>
  )
}

export default App
