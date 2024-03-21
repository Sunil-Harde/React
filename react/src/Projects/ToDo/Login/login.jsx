import React, { useState } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'
import Nav1 from '../Navbar/NavBar'



function Login() {

    const [value, setValue] = useState({
        username: "",
        password: ""
    })

    const [error, setError] = useState({
        usernameerror: "",
        passworderror: ""
    })

    const history = useNavigate()

    const erroeHandal = () => {
        console.log(value);

        if (!value.username) {
            setError((e) => {
                return { ...e, usernameerror: "please enter username" }
            })
        }

        if (!value.password) {
            setError((e) => {
                return { ...e, passworderror: "please enter password" }
            })
        }

        // createUserWithEmailAndPassword(auth, value.username, value.password)
        //     .then(() => {
        //         history('/home')
        //     })
        //     .catch((err) => console.log("Error", err));

    }


    return (
        <div>
            <Nav1 />
            <div className='main  container-fluid d-flex align-items-center justify-content-center min-vh-100 w-100'>
                <div className="card form ">
                    <div className='card-header text-center'>
                        <h3>Login</h3>
                    </div>
                    <div className='card-body'>

                        <div className='  d-flex flex-column was-validated '>

                            <div className="form-group">
                                <label htmlFor="" className='mb-1 '>User Name</label>
                                <input type="text" className='form-control' onChange={(event) => setValue((e) => ({ ...e, username: event.target.value }))} placeholder='Enter UserName' required />
                                <div className="invalid-feedback position-absolute">{error.usernameerror}</div>
                            </div>

                            <div className='form-group'>
                                <label htmlFor="" className='mt-4 mb-1'>Password</label>
                                <input type="password " className='form-control' onChange={(event) => { setValue((e) => ({ ...e, password: event.target.value })) }} placeholder='Enter Password' required />
                                <div className="invalid-feedback position-absolute" >{error.passworderror}</div>
                            </div>


                            <button className='btn btn-success ' onClick={erroeHandal}>Login</button>
                            <p className='mt-2'>Your Not  <Link to="../register">Registor</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
