import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch,HashRouter } from 'react-router-dom';
import App from './initialpage/App';
import config from 'config';

// import './assets/css/bootstrap-rtl.min.css';
// // import 'bootstrap/dist/css/bootstrap.min.css';

// // Custom Style File
// import './assets/js/jquery-3.4.1.min.js';
// import './assets/js/popper.min.js';
// import './assets/js/bootstrap-rtl.min.js';
// import './assets/js/jquery.nicescroll.min.js';

// import './assets/plugins/fontawesome/css/fontawesome.min.css';
// import './assets/plugins/fontawesome/css/all.min.css';
// import './assets/plugins/mcustomscroll/jquery.mCustomScrollbar.css';
// import './assets/plugins/mcustomscroll/jquery.mCustomScrollbar.js';
// import './assets/js/script.js';
// import './assets/css/app.css';


if(!window.location.pathname.includes("admin") ) {
   require('./assets/css/bootstrap-rtl.min.css')
   require('./assets/js/jquery-3.4.1.min.js')
   require('./assets/js/popper.min.js');
   require('./assets/js/bootstrap-rtl.min.js');
   require('./assets/js/jquery.nicescroll.min.js');
   require('./assets/plugins/fontawesome/css/fontawesome.min.css')
   require('./assets/plugins/fontawesome/css/all.min.css')
   require('./assets/plugins/mcustomscroll/jquery.mCustomScrollbar.css')
   require('./assets/plugins/mcustomscroll/jquery.mCustomScrollbar.js')
   require('./assets/js/script.js');
   require('./assets/css/app.css');
 }

const MainApp = () => (
   <Router basename={`${config.publicPath}`}>
      <Switch>
         <Route path="/" component={App} />
      </Switch>
	</Router>
);

export default MainApp;