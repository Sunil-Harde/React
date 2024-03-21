import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';



// import { useEffect, useState } from 'react'
// import Html from './Html/index'
// import Css from './Css/Css2'
// import Javascript from './Javascript/javascript'

// function App() {
//     return (
//         <div>
//             {/* <Html/> */}
//             <Css />
//             {/* <Javascript/> */}

//         </div>
//     )
// }
// export default App


// import { Component } from 'react'
// export default class App extends Component {
//     render() {
//         return (
//             <div>App</div>
//         )
//     }
// }




// import Child from './Props/FuctionalChild.jsx'

// const App = () => {

//     const age = 25
//     function clic1() {
//         document.body.style.background = 'green';
//     }

//     const clic2 = () => {
//         document.body.style.background = 'red';
//     }
//     return (
//         <div>

//             <Child name="sid" age={age} clic={clic1} />
//             <Child name="sd" age={age} clic2={clic2} />

//         </div>
//     )
// }

// export default App


// import { Component } from 'react'
// import Child from './Props/Child.jsx'

// export default class App extends Component {
//     render() {

//         function cli() {
//             document.body.style.background = 'red';
//         }

//         var namee = "sunil";
//         var re = ' ';

//         for (var i = namee.length - 1; i >= 0; i--) {
//             re += namee[i];
//         }

//         return (
//             <div>
//                 <Child name="sunil" age="22" cli={cli} />
//                 <Child name={re} age="22" cli={cli} />
//             </div>
//         )
//     }
// }


// // useEffect

// import { useEffect, useState } from "react"

// const App = () => {

//     const [count, setCount] = useState(0)
//     useEffect(() => {
//         document.title = `${count}`

//         let a = document.getElementById("btn1")
//         a?.addEventListener('click', () => {
//             document.body.style.background = "red"
//         })
//     })

//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={() => setCount(count + 1)}>+</button>
//             <button id='btn1'>red</button>
//         </div>
//     )
// }

// export default App




// import { useEffect, useState } from "react"

// const App = () => {
//     const [count, setCount] = useState(0)
//     useEffect(() => {

//         document.title = `${count}`
//         let a = document.getElementById("btn1")

//         a?.addEventListener('click', () => {
//             document.body.style.background = "black"
//         },)

//         setTimeout(() => {
//             setInterval(() => {
//                 document.body.style.background = "yellow"
//             }, 500)

//             setInterval(() => {
//                 document.body.style.background = "red"
//             }, 2000)
//         }, 1000)
//     })

//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={() => setCount(count + 1)}>+</button>
//             <button id="btn1">red</button>
//         </div>
//     )
// }

// export default App




// import Demo from './Portfolio/Demo.jsx'

// const App = () => {
//     return (
//         <Demo />
//     )
// }

// export default App


// import Demo from './Feach/Clear/Clear.jsx'
// import Demo from './Html/index'

// const App = () => {
//     return (
//         <Demo />
//     )
// }

// export default App


// import Demo from './Add/Add.jsx'

// const App = () => {
//     return (
//         <Demo />
//     )
// }

// export default App


// import Demo from './Google_meet/Video'

// const App = () => {
//     return (
//         <Demo /> //video Google Meet
//     )
// }

// export default App;



// import Demo1 from './Api_Search/Searchs'

// const App = () => {
//     return (
//         <Demo1 /> //Using api Search
//     )
// }

// export default App;


// import Demo2 from './re/Timeline'

// const App = () => {
//     return (
//         <div>
//             <Demo2 />
//         </div>
//     )
// }

// export default App


// import Demo from './Inputdata/input'

// const App = () => {
//     return (
//         <Demo />
//     )
// }

// export default App

// function App(props) {
//     function MissedGoal() {
//         return <h1>MISSED!</h1>;
//     }

//     function MadeGoal() {
//         return <h1>GOAL!</h1>;
//     }


//     const isGoal = props.isGoal;
//     if (isGoal) {
//         return <MadeGoal />;
//     }
//     return <MissedGoal />;
// }
// export default App




// function App() {

//     const book = {
//         bookName: 'power',
//         price: 223,
//     }


//     return (
//         <div>

//             <h2>{book.bookName}</h2>
//             <h4>{book.price}</h4>

//         </div>
//     );
// }

// export default App



// import Like from './LikeButton/Like'

// const App = () => {
//     return (
//         <Like />
//     )
// }

// export default App



// import Like from './Map/Map'

// const App = () => {
//     return (
//         <Like />
//     )
// }

// export default App


// import Like from './Map/Map2'

// const App = () => {
//     return (
//         <Like />
//     )
// }

// export default App


// import List from './Map/List';

// const App = () => {
//     return (
//         <List />
//     )
// }

// export default App

// import State from './Hook/UseState/Use1'
// import State1 from './Hook/UseState/Use2'

// const App = () => {
//     return (
//         <div>
//             <div style={{ display: 'flex' }}>
//                 <State />
//                 <State1 />
//             </div>
//         </div>
//     )
// }

// export default App


// import Effect from './Hook/UseEffect/Effect'

// const App = () => {
//     return (
//         <div>
//             <Effect />
//         </div>
//     )
// }

// export default App


// import Memo from './Hook/useMemo/Memo'

// function App() {
//     return (
//         <div>
//             <Memo />
//         </div>
//     )
// }

// export default App




// import NavBar from './NavBar/Navbar'

// const App = () => {
//     return (
//         <div>
//             <NavBar />
//         </div>
//     )
// }

// export default App


// import Demo from './ColorChange/Colour'

// function App() {
//     return (
//         <div>
//             <Demo />
//         </div>
//     )
// }

// export default App


// import Forwardref from './Hook/forwardRef/forwardRf.jsx'

// const App = () => {
//     return (
//         <Forwardref />
//     )
// }

// export default App























// #########################PROJECT####################

// import Convert from '/react/'

// function App() {
//     return (
//         <div>

//         </div>
//     )
// }

// export default App
