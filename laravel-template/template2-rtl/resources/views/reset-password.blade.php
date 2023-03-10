@extends('layout.mainlayout')
@section('content')		
<!-- Main Wrapper -->
        <div class="main-wrapper">          
            <!-- Page Content -->
            <div class="content align-items-center">
                    
                <div class="w-100 ">
                    <div class="login-left">
                        
                        <!-- Login Tab Content -->
                        <div class="account-content">
                            <div class="login-header">
                                <a href="index">
                                    <img src="assets/img/logo-full.png" alt="">
                                </a>
                            </div>
                            <div class="form-col">
                                <div class="login-text-details">
                                    <h3>Reset Password</h3>
                                    <p>Enter the Credentials to Reset the Password</p>
                                </div>
                                <form action="index">
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
                                            <button class="btn newgroup_create btn-block d-block w-100" type="submit">Login</button>
                                        </div>
                                    </div>
                                
                                <div class="text-center dont-have">Do you have an Account? <a href="login-email">Login</a></div>
                                </form>
                            </div>
                            <div class="back-btn-col text-center">
                                <a href="otp-email"><span><i class="fas fa-caret-left"></i></span> Back</a>
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
	   @endsection
	  