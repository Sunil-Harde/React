import React from "react";

const Map2 = (props) => {

    const friendName = [
        { id: 1, name: "Rakesh", contact: 123 },
        { id: 2, name: "Sunil", contact: 123 },
        { id: 3, name: "Raman", contact: 123 }
    ];

    return (
        <div>

            <h1>My Friend List</h1>

                {
                    friendName.map((name) =>
                        <td key={name.id}>
                            <tr>{name.id}</tr>
                            <tr>{name.name}</tr>
                            <tr>{name.contact}</tr>
                        </td>
                    )
                    
                }



            {/*
            
            Using Props we Call The Arrya Map To Map2.
            But you can run Map.jsx File
            IF you run Map2.jsx file using below method you can get error
        
        
        */}


            <ul>
                {
                    props.list.map((name1) =>
                        <li>Friend Name is {name1}</li>
                    )
                }
            </ul>

        </div>
    )
}

export default Map2;
