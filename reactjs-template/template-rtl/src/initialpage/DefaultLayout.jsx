/**
 * App Routes
 */
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

// router service
import routerService from "../router_service";

import LeftSidebar from './Sidebar/leftsidebar';
import RightSidebar from './Sidebar/rightsidebar';
import GroupRightSidebar from './Sidebar/grouprightsidebar';

class DefaultLayout extends Component {
	render() {
		const {  match,location } = this.props
    	let pathname = location.pathname
		return (
			<div className="content main_content">				
				{pathname.includes("status") ? null : <LeftSidebar/>} 
				{routerService && routerService.map((route,key)=>
					<Route key={key} path={`${match.url}/${route.path}`} component={route.component} />
				)}
				{pathname.includes("status") ? null : pathname.includes("group") ? 
				  <GroupRightSidebar/> : <RightSidebar/> } 
			</div>
		);
	}
}
export default withRouter(DefaultLayout);

// export default withRouter(connect(null)(DefaultLayout));
