import React from 'react'
import './Navbar.css'

const Navbar = () => {


    return (
        <div>

            <nav className="nav">

                <div className="right">
                    <a href=""><i>Logo</i></a>
                </div>

                
                    <ul className="left">
                        <li><a href="" id='home'>Home</a></li>
                        <li><a href="">Gallery</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href=""></a></li>
                    </ul>
      


                <label htmlFor="logo1" className="logo">@</label>
                <input type="Checkbox" name="" id="logo1" />


            </nav>

        </div>
    )
}

export default Navbar