import React from "react";
import {BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Lista from "./ListaMtachs";
import PaginaInical from './PaginaInicial'



function AppRouter() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <Redirect to="/inicio"/>
        </Route>

        <Route path='/inicio' component={PaginaInical}/>
        <Route path='/lista' component={Lista}/>

      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;