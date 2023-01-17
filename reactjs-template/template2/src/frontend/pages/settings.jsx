import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Switch,HashRouter } from 'react-router-dom';
import Leftsidebar from '../../frontend/components/left-sidebar.jsx';
import Leftsettingssidebar from '../../frontend/components/left-settings-sidebar.jsx';
import Middlesettingsbody from '../../frontend/components/middle-settings-body.jsx';



class Settings extends Component {
	render() {
  		return (
  			<div className="main-wrapper">
	            <div className="content main_content">
	            	<Leftsidebar />
	            	<Leftsettingssidebar />
	            	<Middlesettingsbody />
	            </div>
            </div>
  		)
  	}
 }

 export {Settings};