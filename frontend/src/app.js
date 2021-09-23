import React from 'react';
import ContextState from './context_state_config'; 
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Switch,
} from 'react-router-dom';
import routes from './Config/routes.js';
import Login from './Pages/Login/Login.js';
import Registration from './Pages/Registration/Registration.js';
import './app.css';
import SearchDashBoard from './Pages/SearchDashBoard/SearchDashBoard.js';
import ImgUpload from './Pages/ImgUpload/ImgUpload.js';

function app() {
    return (
    //     <Router>
    //        <Switch>
    //       <Route exact path="/">
    //         <Login/>
    //       </Route>
    //       <Route path="/Registration">
    //         <Registration />
    //       </Route>
    //       <Route path="/SearchDashBoard">
    //         <SearchDashBoard/>
    //       </Route>
    //       <Route path="/UserUpload">
    //         <ImgUpload/>
    //       </Route>
    //     </Switch>
    //     </Router>
          <ContextState />  
     )
}

export default app;