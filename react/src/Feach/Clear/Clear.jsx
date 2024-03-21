import React from "react"
import { useEffect, useState } from 'react'
import './clear.css'

const Clear = () => {

    const [data, setData] = useState([])
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(d => setData(d))
    })

    return (
        <div>
            <div className="section1">
                {
                    data.map((e) => {
                        return (
                            <section key={e.id}>
                                <p>{e.name} <span>{e.id}</span></p>
                            </section>
                        )
                    })
                }
                <button onClick={() => setData = []}>Clear</button>
            </div>
        </div>
    )
}

export default Clear