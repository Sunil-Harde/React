// @ts-nocheck
import React from 'react'
import './Navbar.css'

const Navbar = () => {


    return (
        <div>

            <img src="https://cdn.pixabay.com/photo/2017/08/07/19/41/to-do-2607082_1280.jpg" alt="" />
            <div className="header">

                <a href="" className="logo">
                    <i>LOGO</i>
                </a>

                <label htmlFor="check" className="icon"><i className="fa-solid fa-bars">0</i></label>
                <input type="checkbox" id="check" />

                <div className="navbar1">
                    <a href="#">Home</a>
                    <a href="#">Gallery</a>
                    <a href="#">Photo</a>
                    <a href="#">About</a>
                </div>
            </div>
        </div>
    )
}
export default Navbar