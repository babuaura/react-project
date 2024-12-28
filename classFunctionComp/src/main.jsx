import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
// import Car from './components/Car'
// import Garage from './components/Garage.jsx'
// import Heading from './components/Heading.jsx'
import FavColor from './components/FavColor.jsx'
import Apple from './components/Apple.jsx'
import FavColorClass from './components/FavColorClass.jsx'
import Scooter from './components/Scooter.jsx'
import LIst from './components/LIst.jsx'
import MyForm from './components/MyForm1.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <FavColor />
    <FavColorClass />
    <Scooter />
    <LIst /> */}
    <MyForm />
  </React.StrictMode>,
)
