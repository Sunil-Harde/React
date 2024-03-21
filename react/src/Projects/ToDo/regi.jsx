import React, { useState } from 'react'
import { Form } from 'react-router-dom';

function Regi() {

    const [value, setData] = useState({
        username: '',
        password: ''
    })

    const [error, setError] = useState({
        usernameerror: "",
        passworderror: ""
    })

    const submit = () => {
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

        else{
            setData(value)
        }

    }

    return (

        <div className='  d-flex flex-column min-vh-100 align-items-center justify-content-center' onSubmit={(e) => submit(e)}>
            <div className='card '>
                <h2 className='card-header w-100 text-center '>registor</h2>

                <div className='card-body p-3 ' >

                    <div className='d-flex flex-column was-validated' >

                        <div className='form-group'>
                            <label htmlFor="" className='mb-1'>Name</label>
                            <input type="text" className='form-control' onChange={(event) => setData((e) => ({ ...e, username: event.target.value }))}  required/>
                            <div id="usereerror" className='position-absolute invalid-feedback'>{error.usernameerror}</div>
                        </div>

                        <div>
                            <label htmlFor="" className='mb-1 mt-4'>password</label>
                            <input type="password" className='form-control' onChange={(event) => setData((e) => ({ ...e, password: event.target.value }))} required/>
                            <div id="usereerror" className='position-absolute text-danger invalid-feedback'>{error.passworderror}</div>
                        </div>

                        <button className='btn  btn-danger mt-4' onClick={submit}>Registor</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Regi
