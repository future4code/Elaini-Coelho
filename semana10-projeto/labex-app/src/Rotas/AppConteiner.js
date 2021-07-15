import { BrowserRouter, Route, Switch } from "react-router-dom";
import { HomePage } from '../pages/HomePage'
import {ListTrip} from '../pages/ListTripsPage'
import { ApplicationForm } from '../pages/ApplicationFormPage'
import { LoginPage } from '../pages/LoginPage'
import { CreateTrip } from '../pages/CreateTripPage'
import { AdminHomePage } from '../pages/AdminHomePage'
import { TripDetails } from '../pages/TripDetailsPage'
import { ErrorPage } from "../pages/ErrorPage";

export const AppConteiner = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>

                <Route path="/trips/list" >
                    <ListTrip/>
                </Route>

                <Route path="/trips/application" >
                    <ApplicationForm/>
                </Route>

                <Route path="/login" >
                    <LoginPage/>
                </Route>

                <Route path="/admin/trips/list" >
                    <AdminHomePage/>
                </Route>

                <Route path="/admin/trips/create">
                    <CreateTrip/>
                </Route>

                 <Route path="/admin/trips/:id" >  
                    <TripDetails/>
                </Route>

                <Route>
                    <ErrorPage />
                </Route>
                
            </Switch>
        </BrowserRouter>
    )
}