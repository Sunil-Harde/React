import React, { useState } from 'react'
import { useState } from 'react'
import { CDVLink } from "react-csv"

const inputxl =()=>{
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const[data,setData]=useState([])

    function handleChange=(e)=>{
        setName={e.target.value}//cragdofreshar
    }

    return(
        <div>
        
        <form action="">
        <input type="text" onChange={handalChange} />
        </form></div>
    )
}