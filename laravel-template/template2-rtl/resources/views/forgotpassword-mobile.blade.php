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
                                    <h3>Forgot Password</h3>
                                    <p>Confirm your Phone number and enter the OTP to send to your Registered Mobile Number</p>
                                </div>
                                <form action="login-phone">
                                    <div class="form-group">
                                        <label>Phone Number</label>
                                        <input class="form-control form-control-lg group_formcontrol" name="mobile" type="text">
                                    </div>
                                    <div class="form-group">
                                        <label class="custom-check d-flex flex-wrap ps-0 mt-3">
                                            Didnt recieve OTP ?  <a href="#" class="ms-1" data-bs-toggle="modal" data-bs-target="#otp-success"> Resend OTP.</a>
                                        </label>
                                    </div>
                                    <div class="pt-3">
                                        <div class="text-center">
                                            <button class="btn newgroup_create btn-block d-block w-100" type="submit">Reset Password</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="back-btn-col text-center">
                                <a href="index"><span><i class="fas fa-caret-left"></i></span> Back</a>
                            </div>
                        </div>
                        <!-- /Login Tab Content -->
                    </div>
                    <div class="login-right pwd-bg">
                    </div>
                </div>

            </div>      
            <!-- /Page Content -->
            
             <!-- OTP Success -->
                <div class="modal fade" id="otp-success">
                    <div class="modal-dialog modal-dialog-centered">
                        <div class="modal-content">
                            <div class="modal-body">
                                <div class="success-icon text-center">
                                    <i class="fas fa-check mb-3"></i>
                                    <p>OTP Sent to the Registered Mobile Number</p>
                                </div>    
                                <div class="modal-close text-end">
                                    <div class="close-modal" data-bs-dismiss="modal">
                                        <span>close</span>
                                    </div>
                                </div>
                            </div>       
                        </div>
                    </div>
                </div>
            <!-- /OTP Success -->
            
        </div>
        <!-- /Main Wrapper -->
	   @endsection
	  