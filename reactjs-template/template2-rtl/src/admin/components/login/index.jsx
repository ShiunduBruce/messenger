import React, { Component } from 'react';

class Login extends Component{
    render(){
        return(
            <div className="main-wrapper login-body">
                <div className="login-wrapper">
                    <div className="container">
                        <div className="loginbox">
                            <div className="login-right">
                                <div className="login-right-wrap">
                                    <h1>Login</h1>
                                    <p className="account-subtitle">Access to our dashboard</p>                         
                                    <form action="/template2-rtl/admin">
                                        <div className="form-group">
                                            <input className="form-control" type="text" placeholder="Email" />
                                        </div>
                                        <div className="form-group">
                                            <input className="form-control" type="text" placeholder="Password" />
                                        </div>
                                        <div className="form-group">
                                            <button className="btn btn-primary btn-block" type="submit">Login</button>
                                        </div>
                                    </form>         
                                    <div className="text-center forgotpass"><a href="/template2-rtl/admin/forgotpassword">Forgot Password?</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>       
        )
     }
  }
  
 export default Login;