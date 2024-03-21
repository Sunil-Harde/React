import React, { useState } from "react";

// useState

function Car() {
    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: 1964,
        color: "red"
    });

    const updateColor = () => {
        setCar((previous) => {
            return {...previous, color:'yellow', year: (car.year+1) }
        });
    }

    return (
        <div>
            <div className="div1">
                <h1>My {car.brand}</h1>
                <p>
                    It is a {car.color} {car.model} from {car.year}.
                </p>
                <button type="button" onClick={updateColor}>Blue + 1</button>
            </div>
        </div>
    )
}

export default Car
