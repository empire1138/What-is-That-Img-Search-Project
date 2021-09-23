import React, { useContext, useEffect } from "react";
import { Route, Switch, Redirect } from 'react-router-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import Context from "./utils/Context/context";
import history from "./utils/history";

import Login from './Pages/Login/Login'
import Registration from './Pages/Registration/Registration'

import ImgUpload from './Pages/ImgUpload/ImgUpload';
import SearchDashBoard from './Pages/SearchDashBoard/SearchDashBoard';
import UserProfile from './Pages/userProfile/userProfile';
import PageNotFound from './Pages/PageNotFound/PageNotFound';





const PrivateRoute = ({ component: Component, auth }) => (
    <Route render={props => auth === true
        ? <Component auth={auth} {...props} />
        : <Redirect to={{ pathname: '/auth/login' }} />
    }
    />
)

const Routes = () => {
    const context = useContext(Context)


    return (
        <div>
            <Router history={history}>
                <div>
                    <Switch>

                        <Route path='/auth/login' >
                            <Login />
                        </Route>
                        <Route path='/auth/registration'>
                            <Registration />
                        </Route>

                        <PrivateRoute path='/SearchDashBoard'
                            auth={context.authState}
                            component={SearchDashBoard} />

                        <PrivateRoute path='/ImgUpload'
                            auth={context.authState}
                            component={ImgUpload} />

                        <PrivateRoute path='/UserProfile'
                            auth={context.authState}
                            component={UserProfile} />
                        <Redirect from='/' to='/auth/login' />
                        <Route>
                            <PageNotFound />
                        </Route>

                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default Routes