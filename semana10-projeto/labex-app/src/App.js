import React from "react";
import { HomePage } from './pages/HomePage'
import {ListTrip} from './pages/ListTripsPage'
import { ApplicationForm } from './pages/ApplicationFormPage'
import { LoginPage } from './pages/LoginPage'

function App() {
  return (
    <div>
      <HomePage/>
      <ListTrip/>
      <ApplicationForm/>
      <LoginPage/>
    </div>
  );
}

export default App;
