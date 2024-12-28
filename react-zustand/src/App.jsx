import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CounterValue } from './counter-app/counter-value'
import { ManageCounter } from './counter-app/manage-couter'
import { ProductList } from './products'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h2>React with Zustand</h2>
    <CounterValue/>
    <ManageCounter />
    <ProductList/>
    </>
  )
}

export default App
