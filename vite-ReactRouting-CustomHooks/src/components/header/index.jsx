
import React from 'react'

export const Header = () => {
  return (
    <header>
        <div>Header</div>
        <ul style ={{display : "flex" , gap : '20px', listStyle: 'none'}}>
            <li>Recipes</li>
            <li>Comments</li>
        </ul>
    </header>
  )
}
