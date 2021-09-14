import React from 'react';
import './welcome.css';
import Welcomecontents from '../../components/Welcomecontents';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from '../sidebar/Sidebar';
import Create from '../create/Create';
import Events from '../events/Events';
import Help from '../help/Help';

function Welcome () {
    return (
        <Router>
        <div>
            <div className="welcome-container">  

            <Sidebar />

            <Switch>
            <Route exact path="/welcome">
            <Welcomecontents /> 
            </Route> 

            <Route exact path="/events">
            <Events />
            </Route>

            <Route exact path="/help">
            <Help />
            </Route>

            <Route exact path="/create">
            <Create />
            </Route>

            </Switch>    
            </div>
            
        </div>
        </Router>
    );
}

export default Welcome;