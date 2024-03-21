import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getFirestore, addDoc, collection, getDocs, serverTimestamp } from 'firebase/firestore'
import { auth } from '../Firebase'
import { signOut } from 'firebase/auth'
import { Dropdown } from 'react-bootstrap'
import Model from 'react-modal'
import Nav1 from '../Navbar/NavBar'
import './home.css'



function Home() {

    const [title, setTitle] = useState("")
    const [data, setData] = useState("")
    const [pupop, setPupop] = useState(false)
    const [show, setShow] = useState([])
    const [error, setError] = useState({
        titleError: "",
        dataError: ""
    })
    useEffect(() => {
        const fetchData = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "todo"));
                const tempData = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    title: doc.data().title,
                    description: doc.data().description,
                    timestamp: doc.data().timestamp
                }));
                setShow(tempData);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };
        fetchData();
    }, []);


    const db = getFirestore()

    const history = useNavigate()

    const submit = async () => {

        if (data && title) {
            setPupop(false)
        }

        else {

            if (!title) {
                setError((e) => {
                    return { ...e, titleError: "Plese Enter Title" }
                })
            }

            if (!data) {
                setError((e) => {
                    return ({ ...e, dataError: "Please Enter Description" })
                })
            }
        }

        const doc = await addDoc(collection(db, "todo"), {
            title: title,
            description: data,
            timestamp: serverTimestamp()
        });


        console.log(title);
        console.log(data);
    }

    const singout = () => {

        signOut(auth).then(() => {
            history('/')
        })
    }



    const handleDelete = async (id) => {
        try {
            await deleteDoc(doc(db, 'todo', id));
            setShow(prevState => prevState.filter(item => item.id !== id));
        } catch (error) {
            console.error("Error deleting document: ", error);
        }
    }
    return (
        <div>
            <Nav1 />
            <div className='all d-flex flex-column align-items-center justify-content-center container-fluid'>

                <div className='drop'>

                    <div className=' d-sm-flex align-content-center task'>
                        <div className='your-task'>
                            <h2 className='me-3'>Your Task</h2>
                        </div>

                        <div className=''>
                            <input type="text-area" className='form-control' placeholder='search Task' />
                        </div>
                    </div>


                    <div className='buttons d-flex justify-content-center align-items-center m-md-4 '>

                        <div className=' mb-5 '>
                            <button className='btn btn-primary' onClick={() => { setPupop(true) }}>Add Task</button>
                        </div>

                        <div className=' mb-5 ms-md-5'>
                            <Dropdown>
                                <Dropdown.Toggle id="dropdown-basic">All Task</Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item eventKey="X">In-comepleteTask</Dropdown.Item>
                                    <Dropdown.Item eventKey="X">Complete Task</Dropdown.Item>
                                </Dropdown.Menu>

                            </Dropdown>

                        </div>
                    </div>
                </div>


                <Model isOpen={pupop} onRequestClose={() => setPupop(false)} className="model" >

                    <div className=" d-flex align-items-center justify-content-center flex-column model">

                        <div className='card'>

                            <div className="card-header">
                                <h3 className='text-center'>Add Task</h3>
                            </div>

                            <div className=' was-validated card-body d-flex justify-content-center align-items-center flex-column'>

                                <div className="title me-5">
                                    <label htmlFor="">Title</label>
                                    <input type="text" className='form-control mt-2' onChange={(e) => setTitle(e.target.value)} required />
                                    <div className="invalid-feedback">{error.titleError}</div>
                                </div>

                                <div className="discription mt-4 me-5">
                                    <label htmlFor="" className=''>Discription</label>
                                    <textarea name="" className='form-control mt-2 ' onChange={(e) => setData(e.target.value)} required></textarea>
                                    <div className="invalid-feedback">{error.dataError}</div>
                                </div>
                            </div>

                            <div className="card-footer mt-3 d-flex justify-content-center align-items-center " >
                                <button className='btn btn-success card-button' style={{ margin: "10px", marginLeft: "36px" }} onClick={submit}>Submit</button>
                                <button className='btn btn-danger me-5 card-button' style={{ margin: "10px", marginLeft: "28px" }} onClick={() => setPupop(false)}>Close</button>
                            </div>

                        </div>
                    </div>
                </Model>
            </div>

            <div className='container'>

                <div className='row'>
                    {show.map((item, index) => (
                        <div className='col-lg-3 col-md-4 col-sm-6 mb-4' key={index}>
                            <div className="card">
                                <div className="card-header">
                                    <h3>{item.title}</h3>
                                </div>
                                <div className="card-body">
                                    <p>{item.description}</p>
                                </div>
                                <div className="card-footer">
                                    <button className="btn btn-success" style={{ margin: "2px" }}>Completed</button>
                                    <button className="btn btn-secondary" style={{ margin: "2px" }}>Edit</button>
                                    <button className="btn btn-danger" style={{ margin: "2px" }} onClick={() => handleDelete(item.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>


    )
}

export default Home

