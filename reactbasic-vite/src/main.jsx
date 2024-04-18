import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

function MyApp(){
  return (
    <>
    <h1>Custom React APP</h1>
    </>
  )
}

const AnotherElement = `<a href="https://google.com" target="_blank">
  Visit Google</a>`;


const reactElement = React.createElement('a',
{href: 'https://google.com', target:'_blank'}, 'Visit Google Web Page')

ReactDOM.createRoot(document.getElementById('root')).render(
  // reactElement
  // <AnotherElement />
  // MyApp()
  <React.StrictMode>
  <App />
  </React.StrictMode>
)
