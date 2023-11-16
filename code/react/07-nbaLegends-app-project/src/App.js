//* BENIM YAPTIGIM
// import CardContainer from "./components/CardContainer"
// import Header from "./components/Header"

// import 'bootstrap/dist/css/bootstrap.min.css';

// import "../src/App.css"



// const App = () => {

//   return (
//     <div className="text-center mt-4 d-flex flex-column justify-content-center align-items-center ">

//       <Header />
//       <CardContainer />

//     </div>
//   )
// }


// export default App

//* DERSTE YAPTIGIMIZ
//! -------------------------------------------------------------------------- */

import React from 'react';
import {Container} from "react-bootstrap";

import "../src/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import CardContainer from './components/CardContainer';


const App = () => {
  return (
    <Container className='text-center mt-4'>

      <Header />
      <CardContainer />

    </Container>
  )  
}

export default App
