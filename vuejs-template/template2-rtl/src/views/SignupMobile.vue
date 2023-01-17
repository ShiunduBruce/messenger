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
                                    <h3>Sign up</h3>
                                    <p>Lets get you all setup so you can verify your oersonal account and begin setting up your Profile.</p>
                                </div>
                                <form>
                                    <div class="form-group">
                                        <label>First Name</label>
                                        <input class="form-control form-control-lg group_formcontrol" name="first-name" type="email">
                                    </div> 
                                    <div class="form-group">
                                        <label>Last Name</label>
                                        <input class="form-control form-control-lg group_formcontrol" name="last-name" type="text">
                                    </div>
                                    <div class="form-group">
                                        <label>Phone Number</label>
                                        <input class="form-control form-control-lg group_formcontrol" id="phone" name="phone" type="text">
                                    </div>
                                    <div class="form-group">
                                        <label>Password</label>
                                        <input class="form-control form-control-lg group_formcontrol" name="password" type="password">
                                    </div>
                                    <div class="form-group">
                                        <label>Confirm Password</label>
                                        <input class="form-control form-control-lg group_formcontrol" name="c-password" type="password">
                                    </div>
                                    <div class="form-group">
                                        <label class="custom-check d-flex flex-wrap">
                                            <input type="checkbox">I agreed to all the <a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#terms"> Terms & Conditions,</a><a href="javascript:void(0);">Privacy Policy.</a>
                                            <span class="checkmark"></span>
                                        </label>
                                    </div>
                                    <div class="pt-1">
                                        <div class="text-center">
                                        <router-link to="/index">
                                            <button class="btn newgroup_create btn-block d-block w-100" type="submit">Create Account</button>
                                        </router-link>
                                        </div>
                                    </div>
                                
                                <div class="text-center dont-have">Already have an Account?  <router-link to="/login-phone">Login</router-link></div>
                                </form>
                            </div>
                            <div class="back-btn-col text-center">
                                <router-link to="/index"><span><i class="fas fa-caret-left"></i></span> Back</router-link>
                            </div>
                        </div>
                        <!-- /Login Tab Content -->
                    </div>
                    <div class="login-right signup-bg">
                    </div>
                </div>

            </div>      
            <!-- /Page Content -->
            
           <!-- Terms & Conditions -->
            <div class="modal fade" id="terms">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">
                                Terms & Conditions
                            </h5>
                            <button type="button" class="close" data-bs-dismiss="modal" aria-label="Close">
                                <span class="material-icons">close</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <div class="terms-card">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum vulputate facilisi eu ultricies integer diam. Eu ullamcorper arcu dui, eget volutpat risus dui. Donec nulla mi neque, egestas tristique non. Vel pellentesque dolor nibh scelerisque turpis. Lacus magna vestibulum, quis aliquam nunc, euismod amet.</p>
                                <p>Aliquet elit sapien orci ipsum faucibus fermentum habitant. Ac quam sit leo posuere nulla dignissim. In mi, velit vitae dictum ac. Suscipit orci, sit amet mi massa gravida lectus elit. Auctor lorem arcu quis commodo nibh ipsum. Lectus amet, ultrices nec amet sed condimentum donec.</p>
                                <p class="mb-0">Arcu sed aenean venenatis arcu in at varius. Elementum, nunc, malesuada pretium cras sed praesent mi arcu urna. Erat maecenas lectus pharetra, blandit lectus.</p>
                            </div>
                            <div class="text-end mt-3 align-items-center">
                                <button type="button" class="btn newgroup_create mb-0 close-btn" data-bs-dismiss="modal" aria-label="Close">
                                    Close
                                </button>
                            </div>
                        </div>       
                    </div>
                </div>
            </div>
        <!-- /Terms & Conditions -->
            
        </div>
        <!-- /Main Wrapper -->
    </div>
</template>