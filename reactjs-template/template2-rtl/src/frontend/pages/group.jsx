import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Switch,HashRouter } from 'react-router-dom';
import Leftsidebar from '../../frontend/components/left-sidebar.jsx';
import Leftgroupsidebar from '../../frontend/components/left-group-sidebar.jsx';
import Middlegroupbody from '../../frontend/components/middle-group-body.jsx';
import Rightgroupsidebar from '../../frontend/components/right-group-sidebar.jsx';

class Group extends Component {
	render() {
  		return (
  			<div className="main-wrapper">
	            <div className="content main_content">
	            	<Leftsidebar />
	            	<Leftgroupsidebar />
	            	<Middlegroupbody />
	            	<Rightgroupsidebar />
	            </div>
            </div>
  		)
  	}
 }

 export {Group};