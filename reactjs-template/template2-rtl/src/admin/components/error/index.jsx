import React, { Component } from 'react';


class Error extends Component {
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
				<h1>404</h1>
				<h3 className="h2 mb-3"><i className="fa fa-warning"></i> Oops! Page not found!</h3>
				<p className="h4 font-weight-normal">The page you requested was not found.</p>
				<a href="/template2-rtl/admin" className="btn btn-primary">Back to Home</a>
			</div>
		
        </div>
            </>
        )
    }
}

export default Error; 