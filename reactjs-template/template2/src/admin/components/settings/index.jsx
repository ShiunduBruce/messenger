import React, { Component } from 'react';

import IMG01 from "../../assets/images/profiles/avatar-01.jpg";

class Settings extends Component {
    render() {
        return (
            <>
            <div className="page-wrapper">
			
            <div className="content container-fluid">

                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">General Settings</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/template2/admin">Dashboard</a></li>
                                <li className="breadcrumb-item active">General Settings</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row settings-tab">
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-header all-center">
                                <a href="/template2/admin/settings" className="avatar avatar-sm mr-2">
            <img className="avatar-img rounded-circle" src={IMG01} alt="User Image" />
                                <i className="fe fe-camera"></i>
                                </a>
                                <h6>Seema Sisty</h6>
                                <p>Administrator</p>
                            </div>
                            <div className="card-body p-0">
                                <div className="profile-list">
                                    <a href="#"><i className="fe fe-comment-o"></i></a>
                                    <a href="#">Chat</a>
                                    <a href="#" className="float-right"><h5>10, 203</h5></a>
                                </div>
                                <div className="profile-list">
                                    <a href="#"><i className="fe fe-phone"></i></a>
                                    <a href="#">Call</a>
                                    <a href="#" className="float-right"><h5>403</h5></a>
                                </div>
                                <div className="profile-list">
                                    <a href="#"><i className="fe fe-disabled"></i></a>
                                    <a href="#">Blocked User</a>
                                    <a href="#" className="float-right"><h5>103</h5></a>
                                </div>
                                <div className="profile-list">
                                    <a href="/template2/admin/history/group-history"><button type="button" className="btn btn-block btn-outline-light">View History</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">General Settings</h4>
                            </div>
                            <div className="card-body">
                                <form action="#">
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" className="form-control" value="Seemasisty" />
                                    </div>
                                    <div className="form-group">
                                        <label>Email Address</label>
                                        <input type="email" className="form-control" value="sisty@gmail.com" />
                                    </div>
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text" className="form-control" value="Seema" />
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" value="seemas12345" />
                                    </div>
                                    <div className="text-right">
                                        <button type="submit" className="btn btn-primary">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>			
        </div>
            
            </>
        )
    }
}

export default Settings; 