
import React from 'react'

export const CommonInput = ({type, placeholder, name, id, onChangeHandler, className}) => {
    return <input 
        type ={type || 'text'} 
        name = {name} 
        id = {id}
        placeholder = {placeholder}
        onChange = {onChangeHandler}
        className = {
            className || "w-full block px-5 py-2 mt-2 text-white border rounded-lg"
        }
    />
}
