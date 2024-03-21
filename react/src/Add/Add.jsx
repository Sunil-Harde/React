import React from 'react'
import { useEffect, useState } from 'react'
import './Add.css'

const Add = () => {

    const [open, setOpen] = useState(false)
    const [user, setUser] = useState({ name: "" }, { email: "" }, { number: "" })
    const [userData, setUserData] = useState([])

    function openModal() {
        setOpen(true)
    }

    function closeModel() {
        setOpen(false)
    }

    function addUser() {
        setUserData([...userData, user])
        closeModel()
    }

    function handleDelete(index) {
        const d = userData.filter((v, i) => i !== index)
        setUserData(d);
    }

    return (
        <div className='App'>
            <section>
                <h1>CRUD App</h1>
                <button onClick={openModal}>Add User</button>
            </section>

            <hr></hr>

            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Number</td>
                        <td>Action</td>
                    </tr>
                </thead>

                <tbody>
                    {userData.length > 0 && userData.map((user, index) => {
                        return (
                            <tr key={user.name}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.number}</td>
                                <td>
                                    <button>Edit</button>
                                    <button onClick={() => { handleDelete(index) }}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan={4}>@copyrightsudhesh</td>
                    </tr>
                </tfoot>
            </table>

            {
                open && (
                    <main>
                        <div className='s'>
                            <form action="" className='red'>
                                <label htmlFor="name">Name</label>
                                <input type="text" value={user.name} onChange={(e) => setUser({ ...user, "name": e.target.value })} placeholder='Enter Your Name' name="" id="" />
                                <br />
                                <label htmlFor="email">Email Id</label>
                                <input type="email" value={user.email} onChange={(e) => setUser({ ...user, "email": e.target.value })} placeholder='Enter Your Email id' name="" id="" />
                                <br />
                                <label htmlFor="number">Conatact Number</label>
                                <input type="number" value={user.number} onChange={(e) => setUser({ ...user, "number": e.target.value })} placeholder='Enter Your Phone No.' name="" id="" />
                                <br />
                                <button onClick={addUser}>SUBMIT</button>
                            </form>
                        </div>
                    </main>
                )
            }
        </div>

    )
}

export default Add