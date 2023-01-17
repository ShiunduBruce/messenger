import React,{ Component } from 'react';
import $ from "jquery";
import Carousel from 'react-bootstrap/Carousel';

import Avatar9 from '../assets/img/avatar/avatar-9.jpg';

import Statusicon from '../assets/img/status-icon.png';

class Middleaudiobody extends Component {
  	render() {
  		return (
			<div className="chat d-flex align-items-center justify-content-center">
                <div className="status-right">
                    <div className="audio-chat">
                        <img src={Avatar9} alt="" className="rounded-circle" height="60" width="60" />
                        <p>Hey, <span className="text-highlight">Scott Albright!</span></p>
                        <p className="m-0">Please select a chat to start messaging.</p>
                    </div>
                </div>
            </div>
    	)
    }
}

export default Middleaudiobody;