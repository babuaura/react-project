import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import { ProductList } from './pages/productList'
import { ProductDetails } from './pages/ProductDetails'
import { CartList } from './pages/CartList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
      <Route path = "/product-list" element = {<ProductList/>}></Route>
      <Route path = "/product-details/:id" element = {<ProductDetails/>}></Route>
      <Route path = "/cart-list" element = {<CartList/>}></Route>

      </Routes>
    </>
  )
}

export default App
