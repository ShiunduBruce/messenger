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
                                <h3 class="page-title">Admob Settings</h3>
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item"><router-link to="/admin/index">Dashboard</router-link></li>
                                    <li class="breadcrumb-item active">Admob Settings</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="row ">
                        <div class="col-lg-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Admob Inputs</h4>
                                </div>
                                <div class="card-body">
                                    <form action="#">
                                        <div class="form-group row">
                                            <label class="col-form-label col-md-2">Text Input</label>
                                            <div class="col-md-10">
                                                <input type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-form-label col-md-2">Password</label>
                                            <div class="col-md-10">
                                                <input type="password" class="form-control">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-form-label col-md-2">Disabled Input</label>
                                            <div class="col-md-10">
                                                <input type="text" class="form-control" disabled="disabled">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-form-label col-md-2">Readonly Input</label>
                                            <div class="col-md-10">
                                                <input type="text" class="form-control" value="readonly" readonly="readonly">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-form-label col-md-2">Placeholder</label>
                                            <div class="col-md-10">
                                                <input type="text" class="form-control" placeholder="Placeholder">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-form-label col-md-2">File Input</label>
                                            <div class="col-md-10">
                                                <input class="form-control" type="file">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-form-label col-md-2">Default Select</label>
                                            <div class="col-md-10">
                                                <select class="form-control form-select">
                                                    <option>-- Select --</option>
                                                    <option>Option 1</option>
                                                    <option>Option 2</option>
                                                    <option>Option 3</option>
                                                    <option>Option 4</option>
                                                    <option>Option 5</option>
                                                </select>
                                            </div>
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