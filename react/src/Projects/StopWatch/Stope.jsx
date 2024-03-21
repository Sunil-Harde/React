import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import './Stop.css'

function Stope() {

    const [start, setStart] = useState(false)
    const [min, setMin] = useState(0)
    const [sec, setSec] = useState(0)
    const [mil, setMil] = useState(0)

    let timer;


    function stop() {
        clearInterval(timer)
        setStart(false)
    }

    function resum() {
        setMin(0)
        setSec(0)
        setStart(false)
    }

    useEffect(() => {

        if (start === true) {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            timer = setInterval(() => {

                setMil(mil + 1)
                if (mil == 99) {
                    setSec(sec + 1)
                    setMil(0)
                }

                if(sec>=60){
                    setMin(min+1)
                    setSec(0)
                }
            }, 10);
        }


        return () => clearInterval(timer)
    })




    return (
        <div className=' body d-flex flex-column justify-content-center align-items-center min-vh-100 '>
            <div className='card   h-100 align-items-center'>

                <div className="card-header bg-black text-center text-white rounded w-100 ">
                    <h2>Stop Watch</h2>
                </div>

                <div className="card-body  ">
                    <div className="time d-flex align-items-center justify-content-center gap-3 bg-black text-white rounded my-3 p-2">
                        <span className='min'>{min < 10 ? "0" + min : min}</span>:
                        <span className='sec'>{sec < 10 ? "0" + sec : sec}</span>:
                        <span className='sec'>{mil < 10 ? "0" +mil : mil}</span>
                    </div>

                    <div className="d-flex gap-3">
                        <button className='btn btn-primary' onClick={()=>setStart(true)}>start</button>
                        <button className='btn btn-danger' onClick={stop}>Stop</button>
                        <button className='btn btn-success' onClick={resum}>Resum</button>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Stope
