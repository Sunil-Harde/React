import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './LoginPage/login'

function First() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    { // <Route path="/" element={<Home />} />
                    }
                    <Route path="Login" element={<Login />} />
                </Routes>

            </BrowserRouter>
        </div>
    )
}

export default First
