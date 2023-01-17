<?php $page="register";?>
@extends('layout.mainlayout')
@section('content')				
	<!-- Main Wrapper -->
		<div class="main-wrapper">
			<div class="container-fluid">
				<div class="row">
					<div class="col-lg-12 col-xl-8 p-0">
					
						<!-- Header -->
						<header class="header">
							<nav class="navbar navbar-expand-lg header-nav">
								<div class="navbar-header">
									<a href="javascript:void(0);" class="navbar-brand logo">
										<img src="assets/img/logo.png" class="img-fluid" alt="Logo">
									</a>
								</div>
								
								<ul class="nav header-navbar-rht log-user">
									<li class="nav-item">
										<a class="nav-link" href="index">Sign In</a>
									</li>
									<li class="nav-item">
										<a class="nav-link header-login" href="registe">Sign Up</a>
									</li>
								</ul>
							</nav>
						</header>
						<!-- /Header -->
						
						<!-- Register -->
						<div class="login-wrapper">
							<div class="loginbox">
								<h1>Sign Up to VideoCall</h1>
								<p class="account-subtitle">Register your account</p>
											
								<form action="index">
									<div class="row">
										<div class="col-md-6">
											<div class="form-group">
												<label class="form-control-label">First Name</label>
												<input type="text" class="form-control">
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label class="form-control-label">Last Name</label>
												<input type="text" class="form-control">
											</div>
										</div>
										<div class="col-md-12">
											<div class="form-group">
												<label class="form-control-label">Email Address</label>
												<input type="email" class="form-control">
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label class="form-control-label">Password</label>
												<input type="password" class="form-control">
											</div>
										</div>
										<div class="col-md-6">
											<div class="form-group">
												<label class="form-control-label">Confirm Password</label>
												<input type="password" class="form-control">
											</div>
										</div>
										<div class="form-group">
											<a class="forgot-link" href="forgot-password">Forgot Password ?</a>
										</div>
										<div class="d-grid">
											<button class="btn btn-primary btn-signin" type="submit">Sign Up</button>
										</div>
									</div>
									<div class="dont-have">Already have an account? <a href="index">Login</a></div>
									<div class="login-or">
										<p class="span-or">or</p>
									</div>
									
									<!-- Social Login -->
									<div class="social-login">
										<a href="#"><img src="assets/img/google.png" class="img-fluid" alt="Logo"></a>
										<a href="#"><img src="assets/img/fb.png" class="img-fluid" alt="Logo"></a>
									</div>
									<!-- /Social Login -->
									
								</form>
							</div>
						</div>
						<!-- /Register -->
					</div>
					
					<!-- Banner -->
					<div class="col-xl-4 login-bg">
						<div class="login-banner">
							<img src="assets/img/banner.png" class="img-fluid" alt="Logo">
						</div>
					</div>
					<!-- /Banner -->
					
				</div>
			</div>
		</div>
		<!-- /Main Wrapper -->
@endsection