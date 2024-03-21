import React, { forwardRef, useRef } from 'react'
import { Button } from 'react-bootstrap'
import Input1 from './input'
function forwardRf() {

    const inputRef = useRef(null)

    function inputUpdate() {
        inputRef.current.value = "1000"
        inputRef.current.style.color = "red"
    }

    return (
        <div className='d-flex justify-content-center aline-intem-center flex-column'>
            <h1>ForwerdRef</h1>
            <Input1 ref={inputRef} />
            <Button onClick={inputUpdate}> Input Update</Button>
        </div>
    )
}

export default forwardRf
