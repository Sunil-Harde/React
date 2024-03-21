import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from 'react-bootstrap';

function List() {

    const user = [
        { name: 'Sunil', email: 'sunil@123', contact: 123 },
        { name: 'Rakesh', email: 'Rakesh@123', contact: 456 },
        { name: 'Raman', email: 'Raman@123', contact: 789 }
    ]

    const userDetail = [
        {
            name: 'Sunil', email: 'sunil@123', contact: 123, address: [
                { road: 'Sai', city: 'Latur', contry: 'India' },
                { road: 'Sai', city: 'Pune', contry: 'India' }
            ]
        },
        {
            name: 'Rakesh', email: 'Rakesh@123', contact: 456, address: [
                { road: 'Sai', city: 'Latur', contry: 'India' },
                { road: 'Sai', city: 'Pune', contry: 'India' }
            ]
        },
        {
            name: 'Raman', email: 'Raman@123', contact: 789, address: [
                { road: 'Sai', city: 'Latur', contry: 'India' },
                { road: 'Sai', city: 'Pune', contry: 'India' }
            ]
        }
    ]
    return (

        <div >

            <h1 className='text-center mt-5 mb-3'>List With Bootstrap</h1>
            <Table striped variant='dark' >
                <tbody>
                    <tr className='text-center'>
                        <th >S.n</th>
                        <th >Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                    </tr>

                    {
                        user.map((name, i) =>

                            <tr key={i} className='text-center'>
                                <td>{i + 1} </td>
                                <td>{name.name} </td>
                                <td>{name.email} </td>
                                <td>{name.contact} </td>
                            </tr>


                        )
                    }
                </tbody>
            </Table>

            <h1 className='text-center mt-5 mb-3'>New Table</h1>
            <Table striped variant='dark' className='text-center'>
                <tbody >
                    <tr>
                        <th>S.n</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Address</th>
                    </tr>

                    {
                        userDetail.map((detail, i) =>
                            <tr key={i}>
                                <td>{i+1}</td>
                                <td>{detail.name}</td>
                                <td>{detail.email}</td>
                                <td>{detail.contact}</td>
                                <td className='text-center'>

                                    <Table striped variant='dark' className='mt-2'>
                                        <tbody>
                                            {
                                                detail.address.map((address, j) =>

                                                    <tr key={j} className='text-center'>
                                                        <td>{j+1}</td>
                                                        <td>{address.road}</td>
                                                        <td>{address.city}</td>
                                                        <td>{address.contry}</td>
                                                    </tr>
                                                )
                                            }
                                        </tbody>
                                    </Table>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>


        </div>
    )
}

export default List
