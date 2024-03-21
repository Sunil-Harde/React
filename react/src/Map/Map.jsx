import React from 'react'
import Map2 from './Map2';


const Map = () => {

    const friendList = ["sunil", "Rakesh"];

    return (

        <div>        

            <h1>My Friends List</h1>
            <ul>
                {
                    friendList.map((name) => (
                        <li>My Name is {name} </li>
                    ))
                }
            </ul>

            <Map2 list={friendList}/>

        </div>

    )
}

export default Map