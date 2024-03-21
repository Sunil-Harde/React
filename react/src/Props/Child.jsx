import React from 'react'
import { Component } from "react"

class Child extends Component {

    render(cli) { 
        
        return (
            <div>
                <h1> Maza Nav {this.props.name} Ani Maza Vay {this.props.age}</h1>
                <button onClick={cli}>click</button>
            </div>
        )
    }   
}

export default Child


