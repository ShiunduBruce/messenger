import React, { Component } from "react";
import config from "config";
import { BrowserRouter as Router, Route, Switch,Redirect } from 'react-router-dom';


// import { Route, BrowserRouter as Router,Redirect, Switch } from "react-router-dom";

//home
import Createpassword from "./components/createpassword";
import Forgotpassword from "./components/forgotpassword";
import Home from "./components/home";
import Joincall from "./components/joincall";
import Meetingcallgrid from "./components/meetingcall/grid";
import Meetingcallhorizontal from "./components/meetingcall/horizontal";
import MeetingcallMultigrid from "./components/meetingcall/multigrid";
import MeetingcallMultigrid2 from "./components/meetingcall/multigrid2";
import MeetingcallVertical from "./components/meetingcall/vertical";
import MeetingcallVertical2 from "./components/meetingcall/vertical2";
import Meetingcall2 from "./components/meetingcall2";
import MeetingSingleuser from "./components/Meetingsingleuser";
import Register from "./components/register";
// Custom CSS
// Font Awesome
import './assets/js/script.js';
import './assets/plugins/fontawesome/css/fontawesome.min.css';
import './assets/plugins/fontawesome/css/all.min.css';
//Feather
import './assets/plugins/feather/feather.css';
import './assets/plugins/painterro/painterro.min.js';

import './assets/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap/dist/js/bootstrap.min.js";
import './assets/css/style.css';

class AppRouter extends Component {
  
    render() {
        // if (window.location.pathname === '/') {                 
        //   return (<Redirect to={'/index'} />);                
        // }
    return(
        <Router basename={`${config.publicPath}`}>
            <Switch>
                {/* home */}
                <Route exact path="/index" component={Home} /> 
                <Route exact path="/register" component={Register} /> 
                <Route exact path="/create-password" component={Createpassword} /> 
                <Route exact path="/forgot-password" component={Forgotpassword} /> 
                <Route exact path="/join-call" component={Joincall} /> 
                <Route exact path="/meetingcall-horizontal" component={Meetingcallhorizontal} />    
                <Route exact path="/meetingcall-vertical" component={MeetingcallVertical} /> 
                <Route exact path="/meeting-call-vertical-2" component={MeetingcallVertical2} />  
                <Route exact path="/meetingcall-grid" component={Meetingcallgrid} /> 
                <Route exact path="/meetingcall-multigrid" component={MeetingcallMultigrid} />  
                <Route exact path="/meeting-call-multigrid-2" component={MeetingcallMultigrid2} /> 
                <Route exact path="/meeting-call-2" component={Meetingcall2} /> 
                <Route exact path="/meeting-single-user" component={MeetingSingleuser} /> 
                
            </Switch>
        </Router>        
    );
        }
}


export default AppRouter;