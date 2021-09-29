import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
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
        <Router history={history}>
            <div>
                <Switch>

                    <Route exact path='/auth/login' component={Login} />

                    <Route exact path='/auth/registration' component={Registration} />

                    {/* <Route exact path='/SearchDashBoard' component={SearchDashBoard} />
                    <Route exact path='/ImgUpload' component={ImgUpload} /> */}

                    
                    <PrivateRoute path='/ImgUpload'
                        auth={context.authState}
                        component={ImgUpload} />

                    <PrivateRoute path='/UserProfile'
                        auth={context.authState}
                        component={UserProfile} />

                    {/* <PrivateRoute path='/SearchDashBoard'
                        auth={context.authState}
                        component={SearchDashBoard} /> */}

                    <Route path='/SearchDashBoard'
                        render={(props) => {
                            context.handleAuth(props); 
                            return <SearchDashBoard />
                        }} />

                    <Redirect from='/' to='/auth/login' />
                    <Route component={PageNotFound} />
                </Switch>
            </div>
        </Router>
    )
}

export default Routes