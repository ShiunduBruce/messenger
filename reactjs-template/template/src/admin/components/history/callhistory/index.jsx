import React, { Component } from 'react';

 import IMG01 from "../../../assets/images/profiles/avatar-16.jpg";
 import IMG02 from "../../../assets/images/profiles/avatar-17.jpg";
 import IMG03 from "../../../assets/images/profiles/avatar-18.jpg";
 import IMG04 from "../../../assets/images/profiles/avatar-19.jpg";
 import IMG05 from "../../../assets/images/profiles/avatar-20.jpg";
 import IMG06 from "../../../assets/images/profiles/avatar-21.jpg";



class Callhistory extends Component{
    render(){
        return(
            <>
       
            <div className="page-wrapper">
			
            <div className="content container-fluid">

                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Call History</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/admin">Dashboard</a></li>
                                <li className="breadcrumb-item active">Call History</li>
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
                                                <th>Name</th>
                                                <th>Registered date</th>
                                                <th>Login time</th>
                                                <th>Logout time</th>
                                                <th>Last login</th>
                                                <th>Call Logs</th>
                                                <th className="text-right">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="/admin/settings" className="avatar avatar-sm mr-2">
                                            <img className="avatar-img rounded-circle" src={IMG01} alt="User Image" /></a>
                                                        <a href="/admin/settings">John Lee <span>#0001</span></a>
                                                    </h2>
                                                </td>
                                                <td>01 Oct 2019</td>
                                                <td>01.00 PM</td>
                                                <td>03.54 PM</td>
                                                <td>11.00 PM</td>
                                                <td>374844676</td>
                                                <td className="text-right">
                                                    <div className="actions">
                                                        <a href="#" className="btn btn-sm bg-success-light mr-2" title="View History">
                                                            <i className="fe fe-sync"></i> 
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="/admin/settings" className="avatar avatar-sm mr-2">
                                                <img className="avatar-img rounded-circle" src={IMG02} alt="User Image" /></a>
                                                        <a href="/admin/settings">Joe <span>#0002</span></a>
                                                    </h2>
                                                </td>
                                                <td>23 Jan 2020</td>
                                                <td>10.00 AM</td>
                                                <td>03.12 PM</td>
                                                <td>10.00 AM</td>
                                                <td>974843676</td>
                                                <td className="text-right">
                                                    <div className="actions">
                                                        <a href="#" className="btn btn-sm bg-success-light mr-2" title="View History">
                                                            <i className="fe fe-sync"></i> 
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="/admin/settings" className="avatar avatar-sm mr-2">
                                                    <img className="avatar-img rounded-circle" src={IMG03} alt="User Image" /></a>
                                                        <a href="/admin/settings">John Williams <span>#0013</span></a>
                                                    </h2>
                                                </td>
                                                <td>14 Feb 2020</td>
                                                <td>12.03 PM</td>
                                                <td>11.40 PM</td>
                                                <td>10.00 AM</td>
                                                <td>967665831</td>
                                                <td className="text-right">
                                                    <div className="actions">
                                                        <a href="#" className="btn btn-sm bg-success-light mr-2" title="View History">
                                                            <i className="fe fe-sync"></i> 
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="/admin/settings" className="avatar avatar-sm mr-2">
                                            <img className="avatar-img rounded-circle" src={IMG04} alt="User Image" /></a>
                                                        <a href="/admin/settings">Amy Bond <span>#0017</span></a>
                                                    </h2>
                                                </td>
                                                <td>18 Apr 2020</td>
                                                <td>09.10 AM</td>
                                                <td>05.30 PM</td>
                                                <td>06.00 PM</td>
                                                <td>768812391</td>
                                                <td className="text-right">
                                                    <div className="actions">
                                                        <a href="#" className="btn btn-sm bg-success-light mr-2" title="View History">
                                                            <i className="fe fe-sync"></i> 
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="/admin/settings" className="avatar avatar-sm mr-2">
                                            <img className="avatar-img rounded-circle" src={IMG05} alt="User Image" /></a>
                                                        <a href="/admin/settings">Clara Brady <span>#0019</span></a>
                                                    </h2>
                                                </td>
                                                <td>20 Apr 2020</td>
                                                <td>01.00 PM</td>
                                                <td>09.54 PM</td>
                                                <td>08.00 AM</td>
                                                <td>763498125</td>
                                                <td className="text-right">
                                                    <div className="actions">
                                                        <a href="#" className="btn btn-sm bg-success-light mr-2" title="View History">
                                                            <i className="fe fe-sync"></i> 
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="/admin/settings" className="avatar avatar-sm mr-2">
                                            <img className="avatar-img rounded-circle" src={IMG06} alt="User Image" /></a>
                                                        <a href="/admin/settings">Robert Martin <span>#0020</span></a>
                                                    </h2>
                                                </td>
                                                <td>08 Jun 2020</td>
                                                <td>10.00 AM</td>
                                                <td>07.00 PM</td>
                                                <td>10.00 AM</td>
                                                <td>994573826</td>
                                                <td className="text-right">
                                                    <div className="actions">
                                                        <a href="#" className="btn btn-sm bg-success-light mr-2" title="View History">
                                                            <i className="fe fe-sync"></i> 
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
  
 export default Callhistory; 