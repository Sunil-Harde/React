import React,{ useState } from "react"
import './color.css'

const Colour = () => {

    const [color, setColor] = useState("#799590")

    return (

        <div className="demo" style={{backgroundColor:color}}>

            <div className="text1">

                <div className="text2">

                    <button className="red" style={{backgroundColor:'red'}} onClick={() => setColor("red")}>RED</button>
                    <button className="green" style={{backgroundColor:'green'}} onClick={() => setColor("green")}>GREEN</button>
                    <button className="yellow" style={{backgroundColor:'yellow' , color:'black'}} onClick={() => setColor("yellow")}>YELLOW</button>
                    <button className="pink" style={{backgroundColor:'pink', color:'black'}} onClick={() => setColor("pink")}>PINK</button>
                    <button className="black" style={{backgroundColor:'black'}} onClick={() => setColor("black")}>BLACK</button>
                    <button className="white" style={{backgroundColor:'crimson'}} onClick={() => setColor("crimson")}>CRIMSON</button>
                </div>

            </div>

        </div>
    )
}


export default Colour