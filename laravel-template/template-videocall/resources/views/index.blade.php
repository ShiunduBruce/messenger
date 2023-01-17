<?php $page="index";?>
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
										<a class="nav-link header-login" href="register">Sign Up</a>
									</li>
								</ul>
							</nav>
						</header>
						<!-- /Header -->
						
						<!-- Login -->
						<div class="login-wrapper">
							<div class="loginbox">
								<h1>Get’s Started</h1>
								<p class="account-subtitle">Login to your account</p>
											
								<form action="join-call">
									<div class="form-group">
										<label class="form-control-label">Email Address</label>
										<input type="email" class="form-control">
									</div>
									<div class="form-group">
										<label class="form-control-label">Password</label>
										<input type="password" class="form-control">
									</div>
									<div class="form-group">
										<a class="forgot-link" href="forgot-password">Forgot Password ?</a>
									</div>
									<div class="d-grid">
										<button class="btn btn-primary btn-signin" type="submit">Sign In</button>
									</div>
									<div class="dont-have">Don't have an account yet? <a href="register">Register</a></div>
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
						<!-- /Login -->
						
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