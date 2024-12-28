import React, { Component } from 'react'

class FavColorClass extends Component {
    constructor (){
        super();
        this.state ={color: "red", model: "350X"}
    }

    render (){
        return (
            <>
                <h1>My Car color is {this.state.color} and {this.state.model}</h1>
                <button onClick={()=>{this.setState(preState=> { return {...preState, color: 'Blue', model: '500'}})}}>Change Color</button>
            </>
        )
    }
}

export default FavColorClass