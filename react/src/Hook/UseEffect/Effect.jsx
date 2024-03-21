import React, { useEffect, useState } from 'react'
import './useEffect.css'
import Demo from './Effect1'

function Effect() {

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    useEffect(() => {
        alert('Count useEffect')
    }, [count])

    return (
        <div>

            <Demo count2={count2} count={count}/>

            <button onClick={() => setCount(count + 1)}>Click</button>
            <button onClick={() => setCount2(count2 + 1)}>Click</button>


        </div>
    )
}

export default Effect
