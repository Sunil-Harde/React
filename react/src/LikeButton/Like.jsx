import React from "react";
import { useState } from "react";
import './Like.css'

const Like = () => {

    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    const [open, setOpen] = useState(true)
    const [open1, setOpen1] = useState(false)


    const openLogin = () => {
        
        setOpen1(true)
        setOpen(false)

    }

    const closeLogin = () => {
        setOpen(true)
        setOpen1(false)

    }

    return (

        <div>

            {
                open &&
                <main>
                    <div className="like_Unlike">

                        <div className="likes">
                            <h1>{count}</h1>
                            <button onClick={() => { setCount(count + 1) }}>Like</button>
                        </div>

                        <div className="unlikes">
                            <h1>{count1}</h1>
                            <button onClick={() => { setCount1(count1 - 1) }}>Unlike</button>
                        </div>

                    </div>

                    <button onClick={openLogin} className="button">Open Login</button>

                </main>
            }


            {
                open1 &&

                <main>

                    <div className="login">
                        <div className="userName">
                            <label htmlFor="">Enter UserName</label><br />
                            <input type="text" />
                        </div>

                        <div className="userPass">
                            <label htmlFor="">Enter UserName</label><br />
                            <input type="password" />
                        </div>

                    </div>
                    <button onClick={closeLogin} className="button">Close Login</button>

                </main>

            }

        </div>

    )
}

export default Like