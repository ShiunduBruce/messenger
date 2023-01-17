import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Switch,HashRouter } from 'react-router-dom';
import Leftsidebar from '../../frontend/components/left-sidebar.jsx';
import Leftcallsidebar from '../../frontend/components/left-audio-sidebar.jsx';
import Middleaudiobody from '../../frontend/components/middle-audio-body.jsx';


class Audiocall extends Component {
	render() {
  		return (
  			<div className="main-wrapper">
	            <div className="content main_content">
	            	<Leftsidebar />
	            	<Leftcallsidebar />
	            	<Middleaudiobody />
	            </div>
            </div>
  		)
  	}
 }

 export {Audiocall};