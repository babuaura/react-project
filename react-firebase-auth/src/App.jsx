import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import { LoginPage } from './pages/login'
import { RegisterPage } from './pages/register'
import { AuthRoutePage } from './pages/private-route'
import { ProfilePage } from './pages/profile'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>React Firebase Auth</h1>
      <Routes>
        <Route path = "/login" element = {<LoginPage/>}></Route>
        <Route path = "/register" element = {<RegisterPage/>}></Route>
        <Route path = "/profile" element = {
          <AuthRoutePage>
            <ProfilePage />
          </AuthRoutePage>
          }>
        </Route>
      </Routes>
    </>
  )
}

export default App
