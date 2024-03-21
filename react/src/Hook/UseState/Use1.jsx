import React, { useState } from 'react';
import './Use.css'

function Example() {
    const [count, setCount] = useState(0);
    const [count1, setCount1] = useState(0);


    return (
        <div>
            <div className='div1'>
                <p>You clicked {count} times</p>
                <button onClick={() => { setCount(count + 1) }}>Click me</button>

                <p>You clicked {count1} times</p>
                <button onClick={() => { setCount1(count1 - 1) }} >Click me</button>
            </div>
        </div>
    );
}

export default Example