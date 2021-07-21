import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/Login';
import AddRecipesPage from '../pages/AddRecipesPage/AddRecipes';
import SingUpPage from '../pages/SingUpPage/SingUp';
import RecipesDetalsPage from '../pages/RecipeDetalisPage/RecipeDetals';
import RecipesListPage from '../pages/RecipesListPage/RecipesList';
import ErroPage from '../pages/ErroPage/ErrorPage'

const Router = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/login">
                <LoginPage/>
            </Route>


            <Route exact path="/Adicionar-receita" >
                <AddRecipesPage/>
            </Route>


            <Route exact path="/cadastro" >
                <SingUpPage/>
            </Route>


            <Route exact path="detalhe/:id" >
                <RecipesDetalsPage/>
            </Route>


            <Route exact path="/" >
                <RecipesListPage/>
            </Route>


            <Route>
                <ErroPage/>
            </Route>


        </Switch>
        </BrowserRouter>
    )
}

export default Router;