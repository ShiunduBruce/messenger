<template>
	<!-- Main Wrapper -->
    <div class="main-wrapper login-body">
     <div class="login-wrapper">
                <div class="container">
                    <div class="loginbox">
                        <div class="login-right">
                            <div class="login-right-wrap">
                                <h1>Login</h1>
                                <p class="account-subtitle">Access to our dashboard</p>                         
                                <!-- Form -->
                                <form>
                                    <div class="form-group">
                                        <input class="form-control" type="text" placeholder="Email">
                                    </div>
                                    <div class="form-group">
                                        <input class="form-control" type="text" placeholder="Password">
                                    </div>
                                    <div class="form-group">
                                    <router-link to="/admin/index">
                                        <button class="btn btn-primary btn-block" type="submit">Login</button>
                                    </router-link>
                                    </div>
                                </form>
                                <!-- /Form -->
                                
                                <div class="text-center forgotpass"><router-link to="/admin/forgot-password">Forgot Password?</router-link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
    <!-- /Main Wrapper -->
</template>