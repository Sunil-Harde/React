import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../Firebase'
import Nav1 from '../Navbar/NavBar'

function Register() {
    const [value, setValue] = useState({
        firstname: "",
        lastname: "",
        username: "",
        password: ""
    })

    const history = useNavigate();

    function submit(e) {
        e.preventDefault()

        

        if (!value.firstname || !value.lastname || !value.username || !value.password) {
            alert('Please Enter All Values')
            return;
        }

        createUserWithEmailAndPassword(auth, value.username, value.password)
            .then((res) => {
                console.log(res, "authData")
                history('/Home')
            })
            .catch((err) => console.log("Error", err));

        console.log(value);
    }

    return (
        <div>
            <Nav1 />
            <div className='container-fluid  d-flex flex-column justify-content-center align-items-center min-vh-100 ' style={{backgroundImage:"url(https://cdn.pixabay.com/photo/2014/12/16/16/19/smartphone-570507_1280.jpg)", backgroundSize:"cover", borderRightWidth:100,  backgroundPositionX: "center"}}>
                <div className='card  shadow-lg form '>
                    <div className='card-header text-center'>
                        <h2>Register</h2>
                    </div>

                    <div className="card-body">
                        <Form className='d-flex flex-column was-validated'>
                            <div>
                                <label htmlFor="" className='mb-1'>First Name</label>
                                <input type="text" className='form-control' onChange={(event) => setValue({ ...value, firstname: event.target.value })} placeholder='First Name' required />
                                <label htmlFor="" className='mt-3 mb-1'>Last Name</label>
                                <input type="text" className='form-control' onChange={(event) => setValue({ ...value, lastname: event.target.value })} placeholder='Last Name' required />
                            </div>

                            <div className='mt-3'>
                                <label htmlFor="" className='mb-1'>User Name</label>
                                <input type="text" className='form-control' onChange={(event) => setValue({ ...value, username: event.target.value })} placeholder='Username' required />
                            </div>

                            <div className='mt-3'>
                                <label htmlFor="" className='mb-1'>Password</label>
                                <input type="password" className='form-control' onChange={(event) => setValue({ ...value, password: event.target.value })} placeholder='Password' required />
                            </div>

                            <button className='btn btn-success mt-3' onClick={submit}>Register</button>
                            <p className='text-light'>Already have an account? <Link to="../Login" className='fs-5'>Login</Link></p>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
