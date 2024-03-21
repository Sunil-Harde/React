import React from "react"
import "./Search.css"
import { useEffect, useState } from "react"

const Searchs = () => {

    const [data, setData] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=41521122-52441f7d3ad875ffb51812a60&q=yellow+flowers&image_type=photo&pretty=true`)
            .then((result) => {
                result.json()
                    .then((d) => {
                        setData(d.hits)
                    })
            })
    })


    return (
        <div>
            <input type="search" onChange={(d) => setSearch(d.target.value)} value={search} ></input>
            <div className="section">
                {data.map((x) => {
                    return (
                        <div className="section" key={x.id}>
                            <img className="section2" src={x.webformatURL} width={x.previewWidth} height={x.previewHeight} alt="" />
                        </div>
                    )
                })
                }
            </div>

        </div>
    )
}

export default Searchs;
