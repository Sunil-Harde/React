import React from "react"
import { useEffect,useState } from 'react'
import Img1 from './Photo/img1.jpg'
import "./demo1.css"

const Demo = ()=>{

        const[count,setCount5] = useState(0)
        // useEffect(() =>{
        //   document.title=`${count}`
        // })

        const [buttonText, setButtonText] = useState('Submit'); 
        
        const click = () => { 
            setButtonText('Thank you for Shopping'); 
        }
        
        const [buttonText1, setButtonText1] = useState('Submit1'); 
        
        useEffect (()=>{
            let a=document.getElementById("btn5")
            a?.addEventListener('click',()=>{
                setButtonText1('Thank you for Shopping2')
            })
            
        })
        

        

    return(
        <div>

            <div className="card">

                <img src={Img1}alt="" />

                <div className="card1">
                    <button onClick={()=>setCount5(count+1)} className="btn1">+</button>
                    <p>Qty : <span>{count}</span></p>
                    <button onClick={()=>setCount5(count-1)} className="btn1">-</button>
                </div>

                <p className="price" id="pa">price : 100</p>

                <div className="price">
                    <p id="p2">Price:
                        <span>{count*100}</span>
                    </p>
                </div>

                <div className="btn2">
                    <button  onClick={click} className="btn3" id="btn4">{buttonText} </button>
                </div>

                <div className="btn2">
                    <button  className="btn3" id="btn5">{buttonText1}</button>
                </div>

            </div>
        </div>
    )
}

export default Demo