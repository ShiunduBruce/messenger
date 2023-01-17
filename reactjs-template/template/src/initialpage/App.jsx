import React, { Component } from "react";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
//Main App
import DefaultLayout from "./DefaultLayout";
import Login from "../MainPage/login";
import Register from "../MainPage/register";
import Forgotpassword from "../MainPage/forgotpassword";
import CallLog from "../MainPage/call_log";
import GroupCall from "../MainPage/group-call";
import Status from "../MainPage/status-call";
import Chat from "../MainPage/chat";
import config from 'config';


import $ from "jquery";
import AdminAppUniversal from "../admin/app-universal.jsx";

export default class App extends Component {
  componentDidMount() {
    if (
      location.pathname.includes("login") ||
      location.pathname.includes("register") ||
      location.pathname.includes("forgot-password")
    ) {
      $("body").addClass("account-page");
    }
    $('*[data-target="#status-modal"]').on("click", function () {
      $("body").addClass("custom-model-open");
    });
    $(".custom-status-close").on("click", function () {
      $("body").removeClass("custom-model-open");
    });
    //Rightside accordian
    $(".accordion-col .accordion-title").on("click", function () {
      $(this).next().slideToggle();
      $(this).toggleClass("active");
    });

    // Tooltip
    if ($('[data-toggle="tooltip"]').length > 0) {
      $('[data-toggle="tooltip"]').tooltip();
    }
  }
  render() {
    const url = this.props.location.pathname.split("/")[1];
    const { location, match, user } = this.props;

    if (location.pathname === "/") {
      return <Redirect to={"/group"} />;
    }
    return (
      <Router basename={`${config.publicPath}`}>
        {url === "admin" ? (
          <div>
            <Switch>
              <Route path="/admin" component={AdminAppUniversal} />
            </Switch>
          </div>
        ) : (
          <>
            {/* <Route render={(props) => <Header {...props} />} /> */}
            <Switch>
              <Route path="/app" component={DefaultLayout} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/forgot-password" component={Forgotpassword} />
                <Route path="/register" component={Register} />   
                <Route path="/call-log" component={CallLog} />  
                <Route path="/group" component={GroupCall} /> 
                <Route path="/status" component={Status} />
                <Route path="/chat" component={Chat} />
            </Switch>{" "}

          </>
        )}
      </Router>
    );
  }
}
