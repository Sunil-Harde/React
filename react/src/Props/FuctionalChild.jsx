import React from "react";


// We Can Write Props in Two Types Like Below There

const App = (props) => {

    function click () {
        document.body.style.background='pink'
    }
    return (
        <div>
        
            <h1>My name is {props.name} and my age is {props.age}</h1>
            <button onClick={click} onDoubleClick={props.you}>Click</button>

        </div>
    );
};



const FunctionalChild = ({ name, age, clic, clic2 }) => {

    function you () {
        document.body.style.background='yellow'
    }

    return (
        <div>
            <h1>My name is {name} and my age is {age}</h1>
            <button onClick={clic} onDoubleClick={clic2}>Click</button>
            <App name={"Sunil"} age={35} you={you} />
        </div>
    );
};

export default FunctionalChild;
