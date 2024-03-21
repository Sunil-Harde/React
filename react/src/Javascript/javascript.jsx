import React from 'react'
import './javascript1.css'


function javascript(){
    function clicked(){
        document.body.style.background="blue"
        document.body.style.navbar1.color="blue"
    }
    function blu(){
        let x=document.getElementById("ip1")
        x.value=x?.ariaValueMax?.toUpperCase()
    }
    const name ="sunil"
    const age =25
    return(
        <div>
            <button id='bt1' onClick={clicked}>clicked</button>
            <input type="text" id='ip1' onBlur={blu} />
            <h1>my name is {name} my age is {age} </h1>
            <h2>{`my name is ${name} age is {age}`}</h2>
        </div>
    )
}

export default javascript