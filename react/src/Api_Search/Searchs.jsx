import React from "react"
import "./Search.css"
import { useEffect, useState } from "react"

const Searchs = () => {

    const [data, setData] = useState([])
    const [search, setSearch] = useState('India')

    useEffect(() => {
        fetch(`https://pixabay.com/api/?key=41521122-52441f7d3ad875ffb51812a60&q=${search}&image_type=photo&pretty=true`)
            .then((result) => {
                result.json()
                    .then((d) => {
                        setData(d.hits)
                    })
            })
    })


    return (
        <div className="d-flex flex-column justify-content-center align-items-center mt-3 me-5">
            <input type="search" onChange={(d) => setSearch(d.target.value)} value={search} className="form-control w-25 ms-5" ></input>
            <div className="d-flex justify-content-center align-items-center flex-wrap">
                {data.map((x) => {
                    return (
                        <div className="ms-5" key={x.id}>
                            <img className="ms-5 mt-4 w-100"  placeholder="Search" src={x.webformatURL} width={x.previewWidth} height={x.previewHeight} alt="" />
                        </div>
                    )
                })
                }
            </div>

        </div>
    )
}

export default Searchs;
