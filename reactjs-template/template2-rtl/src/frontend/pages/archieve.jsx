import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Switch,HashRouter } from 'react-router-dom';
import Leftsidebar from '../../frontend/components/left-sidebar.jsx';
import Leftarchieveidebar from '../../frontend/components/left-archieve-sidebar.jsx';
import Middlearchievebody from '../../frontend/components/middle-archieve-body.jsx';
import Rightsidebar from '../../frontend/components/right-sidebar.jsx';

class Archieve extends Component {
	render() {
  		return (
  			<div className="main-wrapper">
	            <div className="content main_content">
	            	<Leftsidebar />
	            	<Leftarchieveidebar />
	            	<Middlearchievebody />
	            	<Rightsidebar />
	            </div>
            </div>
  		)
  	}
 }

 export {Archieve};