import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import routes from './Config/routes.js';
import Login from './Pages/Login/Login.js';
import Registration from './Pages/Registration/Registration.js';

function app() {
    return (
        <Router>
           <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route path="/Registration">
            <Registration />
          </Route>
        </Switch>
        </Router>
    )
}

export default app;