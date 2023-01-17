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
											
											<router-link to="/index">
			                                    <img src="../assets/img/logo.png" alt="" class="header_image">
			                                </router-link>
										</div>
										<form>
                                            <div class="form-group">
                                                <label>Email</label>
                                                <input class="form-control form-control-lg group_formcontrol" name="new-chat-title" type="email" placeholder="Enter your email">
                                            </div>
                                            <div class="form-group">
                                                <label for="new-chat-topic">Password</label>
                                                <input class="form-control form-control-lg group_formcontrol" name="new-chat-topic" id="new-chat-topic" type="text" placeholder="Enter your password">
                                            </div>
                                            <div class="pt-1">
			                                	<div class="text-center">
			                                	<router-link to="/index">
			                                     	<button class="btn newgroup_create btn-block d-block w-100" type="submit">Login</button>
			                                     	</router-link>
			                                     	<span class="forgot-link">
			                                     		<router-link to="/forgot-password1" class="text-end">Forgot Password ?</router-link>
			                                     	</span>
			                                    </div>
			                                </div>
										</form>
										<div class="login-or">
											<span class="or-line"></span>
											<span class="span-or">or</span>
										</div>
										<div class="row form-row social-login">
											<div class="col-6">
												<a href="https://www.facebook.com" target="_blank" class="btn btn-facebook btn-block"><i class="fab fa-facebook-f me-1"></i> Login</a>
											</div>
											<div class="col-6">
												<a href="https://mail.google.com" class="btn btn-google btn-block" target="_blank"><i class="fab fa-google me-1"></i> Login</a>
											</div>
										</div>
										<div class="text-center dont-have">Don’t have an account? <router-link to="/register">Register</router-link></div>
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