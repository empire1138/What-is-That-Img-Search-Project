import React from 'react';
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import routes from './Config/routes.js';

function app() {
    return (
        <Router>
            <Switch>
                {routes.map((route) => (
                    <Route
                        key={route.path}
                        path={route.path}
                        component={route.component}
                    />
                ))}
            </Switch>
        </Router>
    )
}

export default app;