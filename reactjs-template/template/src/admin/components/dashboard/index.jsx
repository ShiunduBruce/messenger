import React, { Component } from 'react';


class Dashboard extends Component{
    render(){
        return(
            <>
             {/* <SidebarNav /> */}
             <div className="page-wrapper">
			
            <div className="content container-fluid">
                <div className="row">
                    <div className="col-xl-4 col-sm-4 col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="dash-widget-header">
                                    <span className="dash-widget-icon bg-primary">
                                        <i className="fe fe-users"></i>
                                    </span>
                                    <div className="dash-count">
                                        <a href="#" className="count-title">User Count</a>
                                        <a href="#" className="count"> 10,320</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-4 col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="dash-widget-header">
                                    <span className="dash-widget-icon bg-warning">
                                        <i className="fe fe-phone"></i>
                                    </span>
                                    <div className="dash-count">
                                        <a href="#" className="count-title">Call Duration</a>
                                        <a href="#" className="count"> 14,628</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-4 col-12">
                        <div className="card active">
                            <div className="card-body">
                                <div className="dash-widget-header">
                                    <span className="dash-widget-icon bg-danger">
                                        <i className="fe fe-comments"></i>
                                    </span>
                                    <div className="dash-count">
                                        <a href="#" className="count-title">Chat Count</a>
                                        <a href="#" className="count"> 2,980</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                
                <div className="row">
                    <div className="col-md-12 d-flex">
                    
                       
                        <div className="card card-table flex-fill">
                            <div className="card-header">
                                <h4 className="card-title float-left">User List</h4>
                                <div className="table-search float-right">
                                    <input type="text" className="form-control" placeholder="Search" />
                                    <button className="btn" type="submit"><i className="fa fa-search"></i></button>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="table-responsive no-radius">
                                    <table className="table table-hover table-center">
                                        <thead>
                                            <tr>
                                                <th>User Id</th>
                                                <th>User Name</th>
                                                <th className="text-center">Joined Date</th>
                                                <th className="text-center">Last Seen</th>
                                                <th className="text-right">Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-nowrap">
                                                    <div className="font-weight-600">001</div>
                                                </td>
                                                <td className="text-nowrap">Scott Albright</td>
                                                <td className="text-center">20 Jan 2019</td>
                                                <td className="text-center">
                                                    15 mins ago
                                                </td>
                                                <td className="text-right">
                                                    <div className="font-weight-600 text-danger">Inactive</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-nowrap">
                                                    <div className="font-weight-600">002</div>
                                                </td>
                                                <td className="text-nowrap">Kevin Howard</td>
                                                <td className="text-center">10 Mar 2019</td>
                                                <td className="text-center">
                                                    Just Now
                                                </td>
                                                <td className="text-right">
                                                    <div className="font-weight-600 text-success">Active</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-nowrap">
                                                    <div className="font-weight-600">003</div>
                                                </td>
                                                <td className="text-nowrap">Eric Knight</td>
                                                <td className="text-center">
                                                24 Jun 2019</td>
                                                <td className="text-center">
                                                    1 hr ago
                                                </td>
                                                <td className="text-right">
                                                    <div className="font-weight-600 text-success">Inactive</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-nowrap">
                                                    <div className="font-weight-600">004</div>
                                                </td>
                                                <td className="text-nowrap">Irene Perkins</td>
                                                <td className="text-center">
                                                    09 Sep 2019</td>
                                                <td className="text-center">
                                                    3 mins ago
                                                </td>
                                                <td className="text-right">
                                                    <div className="font-weight-600 text-success">Active</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="text-nowrap">
                                                    <div className="font-weight-600">005</div>
                                                </td>
                                                <td className="text-nowrap">Carol Andre</td>
                                                <td className="text-center">10 Oct 2020</td>
                                                <td className="text-center">
                                                    1 day ago
                                                </td>
                                                <td className="text-right">
                                                    <div className="font-weight-600 text-danger">Inactive</div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
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
  
 export default Dashboard; 