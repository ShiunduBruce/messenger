import React from "react";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/header/index";
import Sidebar from "./components/sidebar";
import Dashboard from './components/dashboard';
import Users from './components/user';
import BlockedUser from './components/user/blocked';
import ReportUser from './components/user/report';
import Callhistory from "./components/history/callhistory";
import Grouphistory from "./components/history/grouphistory";
import Settings from "./components/settings";
import Admob from "./components/settings/admob";
import Sinch from "./components/settings/sinch";
import Firebase from "./components/settings/firebase";
import BlankPage from "./components/blankpage";
import Error from "./components/error";
import Coming from "./components/coming";
import Vectormaps from "./components/vectormaps";
import Login from "./components/login";
import Forgotpassword from "./components/forgotpassword";

import config from 'config';

const AdminAppUniversal = function (props) {
  return (
    <Router basename={`${config.publicPath}`}>
      <div>
        <Route render={(props) => <Header {...props} />} />
        <Route render={(props) => <Sidebar {...props} />} />
        <Switch>
         <Route path="/admin" exact component={Dashboard} /> 
         <Route path="/admin/user" exact component={Users} /> 
         <Route path="/admin/user/blocked-user" exact component={BlockedUser} /> 
         <Route path="/admin/user/report-user" exact component={ReportUser} /> 
         <Route path="/admin/history/call-history" exact component={Callhistory} /> 
         <Route path="/admin/history/group-history" exact component={Grouphistory} /> 
         <Route path="/admin/settings" exact component={Settings} />
         <Route path="/admin/settings/admob" exact component={Admob} />
         <Route path="/admin/settings/sinch" exact component={Sinch} />
         <Route path="/admin/settings/firebase" exact component={Firebase} />
         <Route path="/admin/blank-page" exact component={BlankPage} />
         <Route path="/admin/error" exact render={(props) => <Error {...props} />} />
         <Route path="/admin/coming-soon" exact component={Coming} />
         <Route path="/admin/vectormaps" exact component={Vectormaps} />
         <Route path="/admin/login" exact component={Login} />
         <Route path="/admin/forgotpassword" exact component={Forgotpassword} />
        </Switch>
       
      </div>
    </Router>
  );
};

export default AdminAppUniversal;
