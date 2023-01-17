import React,{ Component } from 'react';
import { BrowserRouter as Router, Route, Switch,HashRouter } from 'react-router-dom';
import Leftsidebar from '../../frontend/components/left-sidebar.jsx';
import Audiocallsinglebody from '../../frontend/components/audiocall-single-body.jsx';
import Rightaudiosinglesidebar from '../../frontend/components/right-audiocall-single.jsx';

class Videocallsingle extends Component {
	render() {
  		return (
  			<div className="main-wrapper">
	            <div className="content main_content">
	            	<Leftsidebar />
	            	<Audiocallsinglebody />
	            	<Rightaudiosinglesidebar />
	            </div>
            </div>
  		)
  	}
 }

 export {Videocallsingle};