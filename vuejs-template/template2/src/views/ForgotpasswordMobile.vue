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
                                    <h3>Forgot Password</h3>
                                    <p>Confirm your Phone number and enter the OTP to send to your Registered Mobile Number</p>
                                </div>
                                <form>
                                    <div class="form-group">
                                        <label>Phone Number</label>
                                        <input class="form-control form-control-lg group_formcontrol" name="mobile" type="text">
                                    </div>
                                    <div class="form-group">
                                        <label class="custom-check d-flex flex-wrap ps-0 mt-3">
                                            Didnt recieve OTP ?  <a href="javascript:void(0);" class="ms-1" data-bs-toggle="modal" data-bs-target="#otp-success"> Resend OTP.</a>
                                        </label>
                                    </div>
                                    <div class="pt-3">
                                        <div class="text-center">
                                        <router-link to="/login-phone">
                                            <button class="btn newgroup_create btn-block d-block w-100" type="submit">Reset Password</button>
                                        </router-link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="back-btn-col text-center">
                                <router-link to="/index"><span><i class="fas fa-caret-left"></i></span> Back</router-link>
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
    </div>
</template>
<script>
    export default {
        mounted() {
//Otp Verfication
    $('.digit-group').find('input').each(function() {
    $(this).attr('maxlength', 1);
        $(this).on('keyup', function(e) {
            var parent = $($(this).parent());

            if(e.keyCode === 8 || e.keyCode === 37) {
                var prev = parent.find('input#' + $(this).data('previous'));
                
                if(prev.length) {
                    $(prev).select();
                }
            } else if((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode === 39) {
                var next = parent.find('input#' + $(this).data('next'));
                
                if(next.length) {
                    $(next).select();
                } else {
                    if(parent.data('autosubmit')) {
                        parent.submit();
                    }
                }
            }
        });
    });

    $('.digit-group input').on('keyup', function(){
        var self = $(this);
        if ( self.val() != '' ) {
            self.addClass('active');
        } else {
            self.removeClass('active');
        }
    });
    
    }
}
    </script>