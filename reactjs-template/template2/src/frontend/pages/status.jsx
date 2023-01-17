import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Switch,HashRouter } from 'react-router-dom';
import Leftsidebar from '../../frontend/components/left-sidebar.jsx';
import Leftstatussidebar from '../../frontend/components/left-status-sidebar.jsx';
import Middlestatusbody from '../../frontend/components/middle-status-body.jsx';

class Status extends Component {
	render() {
  		return (
  			<div className="main-wrapper">
	            <div className="content main_content">
	            	<Leftsidebar />
	            	<Leftstatussidebar />
	            	<Middlestatusbody />
	            </div>
            </div>
  		)
  	}
 }

 export {Status};