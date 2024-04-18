import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [counter, setCounter] = useState(15);

  // let counter = 15;

  const addValue = () => {
    setCounter ((prevCounter) => prevCounter + 1); //prevCounter value caught from Event listener triggered states last value.
    setCounter ((prevCounter) => prevCounter + 1);
    setCounter ((prevCounter) => prevCounter + 1);
    setCounter ((prevCounter) => prevCounter + 1);
    setCounter ((prevCounter) => prevCounter + 1);
  }

  const removeValue = () => {
    setCounter (counter - 1);
  }
  
  return (
    <>
      <h1>React Course With Aura {counter}</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
      <p>Footer : {counter}</p>

      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
