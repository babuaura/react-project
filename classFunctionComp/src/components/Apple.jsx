import React, { Component } from 'react'
import { render } from 'react-dom'

class Apple extends Component{
    render (){
        return (
            <h2>I am {this.props.appleInfo.brand} and color {this.props.appleInfo.color}</h2>
        )
    }
}

export default Apple