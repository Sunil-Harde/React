import React, { useState } from 'react'

function Memo() {

    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)

    function multiCount(){
       let a= count*2
    }


    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', marginTop: '10rem' }}>
            <h1> useMemo Hook </h1>
            <h2>Count : {count}</h2>
            <h2>{multiCount.a} on</h2>

            <button onClick={() => setCount(count + 1)} style={{ margin: '10px' }}>Click me</button>
            <h2>Count1 : {count1}</h2>
            <button onClick={() => setCount1(count1 + 1)}>Click me</button>
        </div>
    )
}

export default Memo
