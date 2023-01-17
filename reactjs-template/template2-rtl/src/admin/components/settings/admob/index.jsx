import React, { Component } from 'react';

import IMG01 from "../../../assets/images/profiles/avatar-15.jpg";

class Admob extends Component {
    render() {
        return (
            <>
        <div className="page-wrapper">
			
            <div className="content container-fluid">

                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Admob Settings</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/template2-rtl/admin">Dashboard</a></li>
                                <li className="breadcrumb-item active">Admob Settings</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row ">
                    <div className="col-lg-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Admob Inputs</h4>
                            </div>
                            <div className="card-body">
                                <form action="#">
                                    <div className="form-group row">
                                        <label className="col-form-label col-md-2">Text Input</label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" /> 
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-form-label col-md-2">Password</label>
                                        <div className="col-md-10">
                                            <input type="password" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-form-label col-md-2">Disabled Input</label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" disabled="disabled" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-form-label col-md-2">Readonly Input</label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" value="readonly" readonly="readonly" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-form-label col-md-2">Placeholder</label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" placeholder="Placeholder" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-form-label col-md-2">File Input</label>
                                        <div className="col-md-10">
                                            <input className="form-control" type="file" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-form-label col-md-2">Default Select</label>
                                        <div className="col-md-10">
                                            <select className="form-control">
                                                <option>-- Select --</option>
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                                <option>Option 3</option>
                                                <option>Option 4</option>
                                                <option>Option 5</option>
                                            </select>
                                        </div>
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

export default Admob; 