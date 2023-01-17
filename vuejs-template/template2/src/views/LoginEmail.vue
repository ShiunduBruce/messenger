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
                                    <h3>Log in</h3>
                                    <p>Login with your Data that you entered during your Registration</p>
                                </div>
                                <form>
                                    <div class="form-group">
                                        <label>Your Email</label>
                                        <input class="form-control form-control-lg group_formcontrol" name="email" type="email">
                                    </div>
                                    <div class="form-group">
                                        <label>Password</label>
                                        <input class="form-control form-control-lg group_formcontrol" name="password" type="text">
                                    </div>
                                    <div class="form-group">
                                        <label class="custom-check d-flex">
                                            <input type="checkbox">Keep me logged in
                                            <span class="checkmark"></span>
            
                                        </label>
                                    </div>
                                    <div class="pt-1">
                                        <div class="text-center">
                                        <router-link to="/index">
                                            <button class="btn newgroup_create btn-block d-block w-100" type="submit">Login</button>
                                        </router-link>
                                        </div>
                                    </div>
                                
                                <div class="text-center dont-have">Don’t have an account? <router-link to="/signup-email">Signup</router-link></div>
                                <div class="text-center mt-3">
                                    <span class="forgot-link">
                                        <router-link to="/forgotpassword-email" class="text-end">Forgot Password ?</router-link>
                                    </span>
                                </div>
                                </form>
                            </div>
                            <div class="back-btn-col text-center">
                                <router-link to="/index"><span><i class="fas fa-caret-left"></i></span> Back</router-link>
                            </div>
                        </div>
                        <!-- /Login Tab Content -->
                    </div>
                    <div class="login-right">
                    </div>
                </div>

            </div>      
            <!-- /Page Content -->
        </div>
        <!-- /Main Wrapper -->
    </div>
</template>