<template>
	<div>
		<div class="main-wrapper">
			<layout-header></layout-header>
            <layout-navadmin></layout-navadmin>
            <!-- Page Wrapper -->
            <div class="page-wrapper">
              <div class="content container-fluid">

                    <div class="page-header">
                        <div class="row align-items-center">
                            <div class="col">
                                <h3 class="page-title">Firebase Settings</h3>
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item"><router-link to="/admin/index">Dashboard</router-link></li>
                                    <li class="breadcrumb-item active">Firebase Settings</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="row settings-tab">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-body">
                                    <form action="#">
                                        <div class="form-group">
                                            <label>Firebase Server Key</label>
                                            <input type="text" class="form-control">
                                        </div>
                                        <div class="form-group">
                                            <label>APNS Key</label>
                                            <input type="text" class="form-control">
                                        </div>
                                        <div class="text-end">
                                            <button type="submit" class="btn btn-primary">Submit</button>
                                        </div>
                                    </form>
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