import React, { Component } from 'react';

 import IMG03 from "../../../assets/images/profiles/avatar-12.jpg";
 import IMG04 from "../../../assets/images/profiles/avatar-19.jpg";
 import IMG05 from "../../../assets/images/profiles/avatar-15.jpg";
 import IMG06 from "../../../assets/images/profiles/avatar-06.jpg";

class BlockedUser extends Component{
    render(){
        return(
            <>
             {/* <SidebarNav /> */}
             <div className="page-wrapper">
			
               <div className="content container-fluid">

                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Blocked User</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/admin">Dashboard</a></li>
                                <li className="breadcrumb-item active">Blocked User</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12 d-flex">

                        <div className="card card-table flex-fill">
                            <div className="card-body">
                                <div className="table-responsive">
                                    <table className="table table-hover table-center mb-0">
                                        <thead>
                                            <tr>
                                                <th>User</th>
                                                <th>Login time</th>
                                                <th>Blocked date</th>
                                                <th>Blocked reason</th>
                                                <th>Blocked time</th>
                                                <th className="text-right">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="/admin/settings" className="avatar avatar-sm mr-2">
                                                            
                                            <img className="avatar-img rounded-circle" src={IMG03} alt="User Image" /></a>
                                                        <a href="/admin/settings">Lee <span>#0010</span></a>
                                                    </h2>
                                                </td>
                                                <td>10.00 AM</td>
                                                <td>07 Jun 2019</td>
                                                <td>Donec posuere dictum enim</td>
                                                <td>11.00 PM</td>
                                                <td className="text-right">
                                                    <div className="actions">
                                                        <a href="#" className="btn btn-sm bg-success-light mr-2" title="Unblocked">
                                                            <i className="fe fe-disabled"></i>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="/admin/settings" className="avatar avatar-sm mr-2">
                                            <img className="avatar-img rounded-circle" src={IMG04} alt="User Image" /></a>
                                                        <a href="/admin/settings">Joe <span>#0010</span></a>
                                                    </h2>
                                                </td>
                                                <td>09.15 AM</td>
                                                <td>28 Sep 2019</td>
                                                <td>Sed sollicitudin</td>
                                                <td>12.40 PM</td>
                                                <td className="text-right">
                                                    <div className="actions">
                                                        <a href="#" className="btn btn-sm bg-success-light mr-2" title="Unblocked">
                                                            <i className="fe fe-disabled"></i>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="/admin/settings" className="avatar avatar-sm mr-2">
                                                <img className="avatar-img rounded-circle" src={IMG05} alt="User Image" /></a>
                                                        <a href="/admin/settings">Mary Wiley <span>#0011</span></a>
                                                    </h2>
                                                </td>
                                                <td>04:45 PM</td>
                                                <td>17 Nov 2019</td>
                                                <td>Lorem ipsum dolor</td>
                                                <td>01.40 PM</td>
                                                <td className="text-right">
                                                    <div className="actions">
                                                        <a href="#" className="btn btn-sm bg-success-light mr-2" title="Unblocked">
                                                            <i className="fe fe-disabled"></i>
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="/admin/settings" className="avatar avatar-sm mr-2">
                                                <img className="avatar-img rounded-circle" src={IMG06} alt="User Image" /></a>
                                                        <a href="/admin/settings">Eric Knight <span>#0013</span></a>
                                                    </h2>
                                                </td>
                                                <td>02:05 PM</td>
                                                <td>11 Jan 2020</td>
                                                <td>Commodo consequat.</td>
                                                <td>07.00 PM</td>
                                                <td className="text-right">
                                                    <div className="actions">
                                                        <a href="#" className="btn btn-sm bg-success-light mr-2" title="Unblocked">
                                                            <i className="fe fe-disabled"></i>
                                                        </a>
                                                    </div>
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
  
 export default BlockedUser; 