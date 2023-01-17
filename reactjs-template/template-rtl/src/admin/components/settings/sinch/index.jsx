import React, { Component } from 'react';


class Sinch extends Component {
    render() {
        return (
            <>
            <div className="page-wrapper">
			
            <div className="content container-fluid">

                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Sinch Settings</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/admin">Dashboard</a></li>
                                <li className="breadcrumb-item active">Sinch Settings</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Basic Inputs</h4>
                            </div>
                            <div className="card-body">
                                <form action="#">
                                    <div className="form-group row">
                                        <label className="col-form-label col-md-2">Large Input</label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control form-control-lg" placeholder=".form-control-lg" />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label className="col-form-label col-md-2">Default Input</label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" placeholder=".form-control" />
                                        </div>
                                    </div>
                                    <div className="form-group mb-0 row">
                                        <label className="col-form-label col-md-2">Small Input</label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control form-control-sm" placeholder=".form-control-sm" />
                                        </div>
                                    </div>
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
                                        <label className="col-form-label col-md-2">Placeholder</label>
                                        <div className="col-md-10">
                                            <input type="text" className="form-control" placeholder="Placeholder" />
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

export default Sinch; 