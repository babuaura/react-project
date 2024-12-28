import React, { useContext } from 'react'
import { GlobalContext } from '../../context'
import { Navigate } from 'react-router-dom'

export const AuthRoutePage = ({children}) => {

    const {user, isLoading} = useContext(GlobalContext);

    if(isLoading) return <h2>Loading Please Wait</h2>

    if(user) return children;

    return <Navigate to = "/login" />
//     return (
//     <div>
//         <h1>AuthRoutePage</h1>
//     </div>
//   )
}
