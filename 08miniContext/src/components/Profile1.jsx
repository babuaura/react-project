import React, {useContext} from 'react'
import UserContext from '../context/UserContext'

export default function Profile1() {

    const {user} = useContext(UserContext)

    if(!user) return <h1> Not Logged In</h1>
  
    return (
    <div>
        <h1>Profile: </h1>
        <h2>Name : {user.username}</h2>
        <h2>Password : {user.password}</h2>
    </div>
  )
}
