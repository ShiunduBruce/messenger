import React, { Component } from 'react';


class Firebase extends Component {
    render() {
        return (
            <>
            <div className="page-wrapper">
			
            <div className="content container-fluid">

                <div className="page-header">
                    <div className="row align-items-center">
                        <div className="col">
                            <h3 className="page-title">Firebase Settings</h3>
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><a href="/template2-rtl/admin">Dashboard</a></li>
                                <li className="breadcrumb-item active">Firebase Settings</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="row settings-tab">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-body">
                                <form action="#">
                                    <div className="form-group">
                                        <label>Firebase Server Key</label>
                                        <input type="text" className="form-control" />
                                    </div>
                                    <div className="form-group">
                                        <label>APNS Key</label>
                                        <input type="text" className="form-control" />
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

export default Firebase; 