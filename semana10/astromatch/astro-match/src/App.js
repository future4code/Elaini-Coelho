import React from "react";
import Pessoas from './Inicial/AdcPessoa';
import styled from "styled-components";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';


const RootDiv = styled.div `
  min-height: 100vh;
`


const App = () => {
  return (
    <RootDiv className='pt-5 pe-3 pb-5 ps-3 bg-dark'>
        <Pessoas/>
    </RootDiv>
  );
}

export default App;
