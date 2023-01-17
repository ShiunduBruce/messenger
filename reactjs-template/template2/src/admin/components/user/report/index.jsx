import React, { Component } from 'react';

import IMG01 from "../../../assets/images/profiles/avatar-01.jpg";
import IMG03 from "../../../assets/images/profiles/avatar-12.jpg";
import IMG04 from "../../../assets/images/profiles/avatar-19.jpg";
import IMG05 from "../../../assets/images/profiles/avatar-15.jpg";
import IMG06 from "../../../assets/images/profiles/avatar-06.jpg";
import IMG20 from "../../../assets/images/profiles/avatar-20.jpg";
import IMG22 from "../../../assets/images/profiles/avatar-22.jpg";
import IMG23 from "../../../assets/images/profiles/avatar-23.jpg";
import IMG24 from "../../../assets/images/profiles/avatar-24.jpg";

class ReportUser extends Component{
    render(){
        return(
            <>
             {/* <SidebarNav /> */}
             <div className="page-wrapper">
			
               <div className="content container-fluid">

                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Report User</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/template2/admin">Dashboard</a></li>
                                <li className="breadcrumb-item active">Report User</li>
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
                                                <th>Report Date</th>
                                                <th>Report time</th>
                                                <th>Report Message</th>
                                                <th>Report Document</th>
                                                <th className="text-right">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="general.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={IMG24} alt="User Image" /></a>
                                                        <a href="general.html">Eric Knight <span>#0009</span></a>
                                                    </h2>
                                                </td>
                                                <td>01 Oct 2019</td>
                                                <td>01.00 PM</td>
                                                <td>They claim a charge</td>
                                                <td>
                                                    <div className="actions">
                                                        <a href="#" className="btn btn-sm bg-success-light mr-2" title="View Document">
                                                            <i className="fe fe-eye"></i> 
                                                        </a>
                                                    </div>
                                                </td>
                                                <td className="text-right">
                                                    <div className="actions">
                                                        <a href="#" className="btn btn-sm bg-success-light mr-2" title="Accepted">
                                                            <i className="fe fe-check"></i> 
                                                        </a>
                                                        <a href="#" className="btn btn-sm bg-danger-light" title="Declined">
                                                            <i className="fe fe-close"></i> 
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="general.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={IMG20} alt="User Image" /></a>
                                                        <a href="general.html">Francis<span>#0007</span></a>
                                                    </h2>
                                                </td>
                                                <td>23 Jan 2020</td>
                                                <td>10.00 AM</td>
                                                <td>Lorem ipsum dolor</td>
                                                <td>
                                                    <div className="actions">
                                                        <a href="#" className="btn btn-sm bg-success-light mr-2" title="View Document">
                                                            <i className="fe fe-eye"></i> 
                                                        </a>
                                                    </div>
                                                </td>
                                                <td className="text-right">
                                                    <div className="actions">
                                                        <a href="#" className="btn btn-sm bg-success-light mr-2" title="Accepted">
                                                            <i className="fe fe-check"></i> 
                                                        </a>
                                                        <a href="#" className="btn btn-sm bg-danger-light" title="Declined">
                                                            <i className="fe fe-close"></i> 
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="general.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={IMG22} alt="User Image" /></a>
                                                        <a href="general.html">Mary Wiley <span>#0003</span></a>
                                                    </h2>
                                                </td>
                                                <td>14 Feb 2020</td>
                                                <td>12.03 PM</td>
                                                <td>Donec posuere dictum</td>
                                                <td>
                                                    <div className="actions">
                                                        <a href="#" className="btn btn-sm bg-success-light mr-2" title="View Document">
                                                            <i className="fe fe-eye"></i> 
                                                        </a>
                                                    </div>
                                                </td>
                                                <td className="text-right">
                                                    <div className="actions">
                                                        <a href="#" className="btn btn-sm bg-success-light mr-2" title="Accepted">
                                                            <i className="fe fe-check"></i> 
                                                        </a>
                                                        <a href="#" className="btn btn-sm bg-danger-light" title="Declined">
                                                            <i className="fe fe-close"></i> 
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="general.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={IMG01} alt="User Image" /></a>
                                                        <a href="general.html">Amy Bond <span>#0004</span></a>
                                                    </h2>
                                                </td>
                                                <td>18 Apr 2020</td>
                                                <td>09.10 AM</td>
                                                <td>Lorem ipsum dolor donec</td>
                                                <td>
                                                    <div className="actions">
                                                        <a href="#" className="btn btn-sm bg-success-light mr-2" title="View Document">
                                                            <i className="fe fe-eye"></i> 
                                                        </a>
                                                    </div>
                                                </td>
                                                <td className="text-right">
                                                    <div className="actions">
                                                        <a href="#" className="btn btn-sm bg-success-light mr-2" title="Accepted">
                                                            <i className="fe fe-check"></i> 
                                                        </a>
                                                        <a href="#" className="btn btn-sm bg-danger-light" title="Declined">
                                                            <i className="fe fe-close"></i> 
                                                        </a>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <h2 className="table-avatar">
                                                        <a href="general.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={IMG23} alt="User Image" /></a>
                                                        <a href="general.html">Clara Brady <span>#0005</span></a>
                                                    </h2>
                                                </td>
                                                <td>20 Apr 2020</td>
                                                <td>01.00 PM</td>
                                                <td>Lorem ipsum Sed sollicitudin</td>
                                                <td>
                                                    <div className="actions">
                                                        <a href="#" className="btn btn-sm bg-success-light mr-2" title="View Document">
                                                            <i className="fe fe-eye"></i> 
                                                        </a>
                                                    </div>
                                                </td>
                                                <td className="text-right">
                                                    <div className="actions">
                                                        <a href="#" className="btn btn-sm bg-success-light mr-2" title="Accepted">
                                                            <i className="fe fe-check"></i> 
                                                        </a>
                                                        <a href="#" className="btn btn-sm bg-danger-light" title="Declined">
                                                            <i className="fe fe-close"></i> 
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
  
 export default ReportUser; 