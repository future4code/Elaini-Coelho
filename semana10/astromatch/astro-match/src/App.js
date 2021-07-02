import React from "react";
import styled from "styled-components";
import AppRouter from "./Components/Router";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';


const RootDiv = styled.div `
  min-height: 100vh;
`


const App = () => {
  return (
    <RootDiv className='pt-0 pe-0 pb-5 ps-0 bg-danger'>

     <AppRouter/>

    </RootDiv>
  );
}

export default App;
