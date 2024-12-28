import React, { useContext } from 'react'
import { GlobalContext } from '../../context'

export const ProfilePage = () => {

    const {user} = useContext(GlobalContext);

    const handleLogout = () => {

    }

  return (
    <div>
        <h1>ProfilePage</h1>
        <h3>{user?.displayName}</h3>
        <p>{user?.email}</p>
        <button onClick={handleLogout}>Logout</button>
    </div>
  )
}
