import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage } from '../pages/HomePage'
import {ListTrip} from '../pages/ListTripsPage'
import { ApplicationForm } from '../pages/ApplicationFormPage'
import { LoginPage } from '../pages/LoginPage'
import { CreateTrip } from '../pages/CreateTripPage'
import { AdminHomePage } from '../pages/AdminHomePage'
import { TripDetails } from '../pages/TripDetailsPage'

export const AppConteiner = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route/>

            </Switch>
        </BrowserRouter>
    )
}