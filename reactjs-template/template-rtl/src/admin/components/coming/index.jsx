import React, { Component } from 'react';


class Coming extends Component {

    componentWillMount(){
        document.body.classList.add('error-page');
    }

    componentWillUnmount(){
        document.body.classList.remove('error-page');
    }
    render() {
        return (
            <>
      <div className="main-wrapper">
			
			<div className="error-box">
				<h2>Comming Soon</h2>
				<p className="h4 font-weight-normal">Under construction</p>
				<a href="/admin" className="btn btn-primary">Back to Home</a>
			</div>
		
        </div>
            </>
        )
    }
}

export default Coming; 