<template>
	<div>
		<div class="main-wrapper">
			<layout-header></layout-header>
            <layout-navadmin></layout-navadmin>
            <!-- Page Wrapper -->
            <div class="page-wrapper">
                <div class="content container-fluid">
                
                    <!-- Page Header -->
                    <div class="page-header">
                        <div class="row">
                            <div class="col-sm-12">
                                <h3 class="page-title">Vector Maps</h3>
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item"><router-link to="/admin/index">Dashboard</router-link></li>
                                    <li class="breadcrumb-item active">Vector Maps</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <!-- /Page Header -->
                    
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">World Map</h4>
                                </div>
                                <div class="card-body">
                                    <div id="vmap" style="width: 100%; height: 400px;"></div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">USA</h4>
                                </div>
                                <div class="card-body">
                                    <div id="vmapusa" style="width: 100%; height: 400px;"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>          
            </div>
            <!-- /Page Wrapper -->
		</diV>
	</div>
</template>
<script>
    export default {
        mounted() {
    // Vector Map
    if ($('#vmap').length > 0) {
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
    }
    if ($('#vmap').length > 0) {
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
    }
    }
}
    </script>