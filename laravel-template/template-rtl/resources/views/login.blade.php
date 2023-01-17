@extends('layout.mainlayout')
@section('content')		
	<!-- Main Wrapper -->
    <div class="main-wrapper">			
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
											<a href="index">
			                                    <img src="assets/img/logo.png" alt="" class="header_image">
			                                </a>
										</div>
										<form action="index">
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
			                                     	<button class="btn newgroup_create btn-block d-block w-100" type="submit">Login</button>
			                                     	<span class="forgot-link">
			                                     		<a href="forgot-password" class="text-end">Forgot Password ?</a>
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
										<div class="text-center dont-have">Don’t have an account? <a href="register">Register</a></div>
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
@endsection