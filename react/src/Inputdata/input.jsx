import React from "react";
import { useState } from "react";

const input = () => {
    const [input, setInput] = useState({ name: "", email: "", password: "" })

    function handleChange(e) {
        setInput({...input,[e.target.name] : e.target.value })
    }

    function handalClick(e) {
        e.preventDefault()
        console.log(input);
    }

    return (
        <div>

            <form action="">

                <input  value={input.name} name="name" type="text" onChange={handleChange} /> <br />
                <input  value={input.email} name="email" type="email" onChange={handleChange} /><br />
                <input  value={input.password} name="password" type="paswword" onChange={handleChange} /><br />
                <br />
                <button onClick={handalClick}>Submit</button>
            </form>


        </div>
    )
}

export default input

//csv