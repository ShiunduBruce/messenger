import React,{ Component } from 'react';
import $ from "jquery";
import Carousel from 'react-bootstrap/Carousel';

import Statusicon from '../assets/img/status-icon.png';

class Middlestatusbody extends Component {
  	render() {
  		return (
			<div className="chat status-middle-bar d-flex align-items-center justify-content-center">
                <div className="status-right">
                    <div className=""><img src={Statusicon} alt="" /></div>
                    <div className="">
                        <p>Click on a contact to view their status updates</p>
                    </div>
                </div>
            </div>
    	)
    }
}

export default Middlestatusbody;