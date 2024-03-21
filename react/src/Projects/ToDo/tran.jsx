import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import  First from './first'
import Login from './Login/login'
import Register from './register/register'
import Regi from './regi'
import Home from './Home/Home'
import Me from './ME/Me'

function tran() {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<First />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/Register" element={<Register />} />
                    <Route path="/regi" element={<Regi />} />
                    <Route path="/Home" element={<Home />} />
                    <Route path="/Me" element={<Me />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default tran
