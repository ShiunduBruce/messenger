<template>
    <div class="main-wrapper">
        <layout-header></layout-header>
            <layout-navadmin></layout-navadmin>
           <!-- Page Wrapper -->
            <div class="page-wrapper">
             <div class="content container-fluid">

                    <div class="page-header">
                        <div class="row align-items-center">
                            <div class="col">
                                <h3 class="page-title">Sinch Settings</h3>
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item"><router-link to="/admin/index">Dashboard</router-link></li>
                                    <li class="breadcrumb-item active">Sinch Settings</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="card">
                                <div class="card-header">
                                    <h4 class="card-title">Basic Inputs</h4>
                                </div>
                                <div class="card-body">
                                    <form action="#">
                                        <div class="form-group row">
                                            <label class="col-form-label col-md-2">Large Input</label>
                                            <div class="col-md-10">
                                                <input type="text" class="form-control form-control-lg" placeholder=".form-control-lg">
                                            </div>
                                        </div>
                                        <div class="form-group row">
                                            <label class="col-form-label col-md-2">Default Input</label>
                                            <div class="col-md-10">
                                                <input type="text" class="form-control" placeholder=".form-control">
                                            </div>
                                        </div>
                                        <div class="form-group mb-0 row">
                                            <label class="col-form-label col-md-2">Small Input</label>
                                            <div class="col-md-10">
                                                <input type="text" class="form-control form-control-sm" placeholder=".form-control-sm">
                                            </div>
                                        </div>
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
                                            <label class="col-form-label col-md-2">Placeholder</label>
                                            <div class="col-md-10">
                                                <input type="text" class="form-control" placeholder="Placeholder">
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
    </div>
</template>