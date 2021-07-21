import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PostPage from '../pages/PostPage/postPage';
import LoginPage from '../pages/LoginPage/loginPage';
import CadastroPage from '../pages/CadastroPage/cadastroPage';
import FeedPage from '../pages/FeedPage/feddPage';
import ErrorPage from '../pages/ErroPage/ErroPage';
import Header from '../componets/Header/header';

const Routes = () => {
    return (
        <BrowserRouter>
            <Header/>
            
            <Switch>
                <Route exact path="/">
                    <LoginPage  />
                </Route>

                <Route exact  path="/cadastro">
                    <CadastroPage />
                </Route>

                <Route exact path="/feed">
                    <FeedPage  />
                </Route>

                <Route exact path="/post" >
                    <PostPage />
                </Route>

                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;