<template>
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
										<img src="../assets/img/logo.png" class="img-fluid" alt="Logo">
									</a>
								</div>
								<ul class="nav header-navbar-rht log-user">
									<li class="nav-item">
										<router-link class="nav-link" to="/">Sign In</router-link>
									</li>
									<li class="nav-item">
										<router-link class="nav-link header-login" to="/register">Sign Up</router-link>
									</li>
								</ul>
							</nav>
						</header>
						<!-- /Header -->
						
						<!-- Forgot Password -->
						<div class="login-wrapper">
							<div class="loginbox">
								<h1>Create New Password</h1>
								<p class="account-subtitle">Your New Password must be different from previously used passwords.</p>
											
								<form>
									<div class="form-group">
										<label class="form-control-label">New Password</label>
										<input type="password" class="form-control">
									</div>
									<div class="form-group">
										<label class="form-control-label">Confirm Password</label>
										<input type="password" class="form-control">
									</div>
									<router-link to="/">
									<div class="d-grid">
										<button class="btn btn-primary btn-signin" type="submit">Create</button>
									</div>
									</router-link>
									<div class="dont-have">Back to  <router-link to="/">Signin</router-link></div>
									<!-- /Social Login -->
								</form>
							</div>
						</div>
						<!-- /Forgot Password -->
						
					</div>
					
					<!-- Banner -->
					<div class="col-xl-4 login-bg">
						<div class="login-banner">
							<img src="../assets/img/banner.png" class="img-fluid" alt="Logo">
						</div>
					</div>
					<!-- /Banner -->
					
				</div>
			</div>
		</div>
		<!-- /Main Wrapper -->
</template>

<script>
export default {
	components: {
  },
    mounted() {
        
	},
}
</script>