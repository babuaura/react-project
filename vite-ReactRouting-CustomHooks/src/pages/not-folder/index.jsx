
import React from 'react'
import { Link } from 'react-router-dom'

export const NotFoundPage = () => {
  return (
    <div>
        <h3>Page Not Exist</h3>
        <Link to = "/recipe-list">Go to Receipe List Page</Link>
    </div>
  )
}
