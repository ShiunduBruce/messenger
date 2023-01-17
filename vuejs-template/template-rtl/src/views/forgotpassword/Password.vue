<template>
 <!-- Main Wrapper -->
 <div class="main-wrapper account-page">			
    <!-- Page Content -->
            <div class="content align-items-center">
                <div class="container-fluid">
                    
                    <div class="row">
                        <div class="col-md-8 offset-md-2">
                            
                            <!-- Login Tab Content -->
                            <div class="account-content">
                                <div class="row align-items-center justify-content-center">
                                    <div class="col-md-12 col-lg-6 login-right">
                                        <div class="login-header">
                                            <!-- <h3>Login <br><span>Access to our Chat</span></h3> -->
                                            <router-link to="/index">
                                                <img src="../../assets/img/logo.png" alt="" class="header_image">
                                            </router-link>
                                        </div>
                                        <form>
                                            <div class="form-group">
                                                <label>Enter your email to get a password reset link</label>
                                                <input class="form-control form-control-lg group_formcontrol" name="new-chat-title" type="email" placeholder="Enter your email">
                                            </div>
                                            <div class="pt-1">
                                                <div class="text-center">
                                                <router-link to="/login1">
                                                    <button class="btn newgroup_create btn-block d-block w-100" type="submit">Reset Password</button>
                                                </router-link>
                                                    <span class="forgot-link">
                                                        <router-link to="/login1" class="text-right">Remember your password?</router-link>
                                                    </span>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <!-- /Login Tab Content -->
                        </div>
                    </div>
                </div>
            </div>      
            <!-- /Page Content -->
</div>
<!-- /Main Wrapper -->
</template>