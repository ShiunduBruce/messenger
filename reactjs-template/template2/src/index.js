import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import App from './App';
import config from 'config';
import 'bootstrap/dist/css/bootstrap.min.css';
import './frontend/assets/plugins/intltelinput/css/intlTelInput.css';
import './frontend/assets/plugins/fontawesome/css/fontawesome.min.css';
import './frontend/assets/plugins/fontawesome/css/all.min.css';
import './frontend/assets/plugins/fancybox/jquery.fancybox.min.css';

import './frontend/assets/js/jquery.slimscroll.min.js';
import './frontend/assets/js/jquery-ui.min.js';
import './frontend/assets/js/popper.min.js';
import './frontend/assets/plugins/fancybox/jquery.fancybox.min.js';
import './frontend/assets/plugins/intltelinput/js/intlTelInput.js';



//ReactDOM.render(<React.StrictMode><App /></React.StrictMode>,document.getElementById('root'));
ReactDOM.render(<App/>, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
