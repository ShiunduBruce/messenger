import React, { Component } from 'react';

class Vectormaps extends Component{
    componentDidMount() {
        $('#vmap').vectorMap({
          map: 'world_en',
          backgroundColor: '#333333',
          color: '#ffffff',
          hoverOpacity: 0.7,
          selectedColor: '#666666',
          enableZoom: true,
          showTooltip: true,
          scaleColors: ['#C8EEFF', '#006491'],
          normalizeFunction: 'polynomial'
        });
         $('#vmapusa').vectorMap({
          map: 'usa_en',
          enableZoom: true,
          showTooltip: true,
          selectedColor: null,
          hoverColor: null,
          colors: {
            mo: '#C9DFAF',
            fl: '#C9DFAF',
            or: '#C9DFAF'
          },
          onRegionClick: function(event, code, region){
            event.preventDefault();
          }
        });
        setTimeout(function(){ 
            mA.redraw();
            mL.redraw();
        }, 300);
    }
    render(){
        return(
            <>
                {/* <SidebarNav /> */}
                <div className="page-wrapper">
                    <div className="content container-fluid">

                        <div className="page-header">
                            <div className="row align-items-center">
                                <div className="col">
                                    <h3 className="page-title">Vector Maps</h3>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><a href="/template2/admin">Dashboard</a></li>
                                        <li className="breadcrumb-item active">Vector Maps</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">World Map</h4>
                                    </div>
                                    <div className="card-body">
                                        <div id="vmap"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="card">
                                    <div className="card-header">
                                        <h4 className="card-title">USA</h4>
                                    </div>
                                    <div className="card-body">
                                        <div id="vmapusa"></div>
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
  
 export default Vectormaps; 