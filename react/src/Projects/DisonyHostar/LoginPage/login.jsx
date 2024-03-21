import React from 'react'
import img from '../Img/login.jpg'

function login() {
    return (
        <div className='row'>

            <div className='col-6 h-100'>
                <img className='w-100 h-100 ' style={{backgroundImage:img}} src={img} alt="" />
            </div>

            <div className='col-6'>

                <div className=''>
                    <h1>Log in or sing up to continue</h1>
                </div>

            </div>

        </div>
    )
}

export default login
