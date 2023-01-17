<template>
	<div class="account-page ml-minus">
		<!-- Main Wrapper -->
        <div class="main-wrapper">          
            <!-- Page Content -->
            <div class="content align-items-center">
                    
            <div class="w-100 ">
                    <div class="login-left">
                        
                        <!-- Login Tab Content -->
                        <div class="account-content">
                            <div class="login-header">
                                <router-link to="/index">
                                    <img src="../assets/img/logo-full.png" alt="">
                                </router-link>
                            </div>
                            <div class="form-col">
                                <div class="login-text-details">
                                    <h3>Reset Password</h3>
                                    <p>Enter the Credentials to Reset the Password</p>
                                </div>
                                <form>
                                    <div class="form-group">
                                        <label>Old Password</label>
                                        <input class="form-control form-control-lg group_formcontrol" name="old-password" type="password">
                                    </div>
                                    <div class="form-group">
                                        <label>New Password</label>
                                        <input class="form-control form-control-lg group_formcontrol" name="new-password" type="password">
                                    </div>
                                    <div class="form-group">
                                        <label>Confirm Password</label>
                                        <input class="form-control form-control-lg group_formcontrol" name="confirm-password" type="password">
                                    </div>
                                    <div class="pt-1">
                                        <div class="text-center">
                                        <router-link to="/index">
                                            <button class="btn newgroup_create btn-block d-block w-100" type="submit">Login</button>
                                        </router-link>
                                        </div>
                                    </div>
                                
                                <div class="text-center dont-have">Do you have an Account? <router-link to="/login-email">Login</router-link></div>
                                </form>
                            </div>
                            <div class="back-btn-col text-center">
                                <router-link to="/otp-email"><span><i class="fas fa-caret-left"></i></span> Back</router-link>
                            </div>
                        </div>
                        <!-- /Login Tab Content -->
                    </div>
                    <div class="login-right pwd-bg">
                    </div>
                </div>

            </div>      
            <!-- /Page Content -->
        </div>
        <!-- /Main Wrapper -->
    </div>
</template>