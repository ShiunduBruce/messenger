import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Switch,HashRouter } from 'react-router-dom';
import Leftsidebar from '../../frontend/components/left-sidebar.jsx';
import Audiocallgroupbody from '../../frontend/components/audiocall-group-body.jsx';
import Rightaudiogroupsidebar from '../../frontend/components/right-audiocall-group.jsx';


class Audiocallgroup extends Component {
	render() {
  		return (
  			<div className="main-wrapper">
	            <div className="content main_content">
	            	<Leftsidebar />
	            	<Audiocallgroupbody />
	            	<Rightaudiogroupsidebar />
	            </div>
            </div>
  		)
  	}
 }

 export {Audiocallgroup};