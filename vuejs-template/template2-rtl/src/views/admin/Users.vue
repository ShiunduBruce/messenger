<template>
    <div class="main-wrapper">
        <layout-header></layout-header>
            <layout-navadmin></layout-navadmin>
        <!-- Page Wrapper -->
        <div class="page-wrapper">
		  <div class="content container-fluid">

                    <div class="page-header">
                        <div class="row align-items-center">
                            <div class="col">
                                <h3 class="page-title">Users</h3>
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item"><router-link to="/admin/index">Dashboard</router-link></li>
                                    <li class="breadcrumb-item active">Report User</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12 d-flex">
                        
                            <!-- Recent Orders -->
                            <div class="card card-table flex-fill">
                                <div class="card-body">
                                    <div class="table-responsive">
                                        <table class="table table-hover table-center mb-0">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Registered date</th>
                                                    <th>Login time</th>
                                                    <th>Logout time</th>
                                                    <th>Last login</th>
                                                    <th class="text-end">Action</th>
                                                </tr>
                                            </thead>
                                             <tbody>
                                                <tr v-for="item in User" :key="item.id">
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <router-link to="/admin/general" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" :src="loadImg(item.img)" alt="User Image"></router-link>
                                                            <router-link to="/admin/general">{{item.name}} <span>{{item.userid}}</span></router-link>
                                                        </h2>
                                                    </td>
                                                    <td>{{item.registereddate}}</td>
                                                    <td>{{item.logintime}}</td>
                                                    <td>{{item.logouttime}}</td>
                                                    <td>{{item.lastlogin}}</td>
                                                    <td class="text-end">
                                                        <div class="actions">
                                                            <a href="javascript:void(0);" class="btn btn-sm bg-success-light me-2">
                                                                <i class="fe fe-pencil"></i> 
                                                            </a>
                                                            <a href="javascript:void(0);" class="btn btn-sm bg-danger-light">
                                                                <i class="fe fe-trash"></i> 
                                                            </a>
                                                        </div>
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <!-- /Recent Orders -->
                            
                        </div>
                    </div>
                </div>  		
        </div>
        <!-- /Page Wrapper -->
    </div>
</template>
<script>
    import User from '../../assets/json/users/User.json'
    const images = require.context('../../assets/admin_img/profiles', false, /\.png$|\.jpg$/)
	export default {
	mounted() {
	},
    methods:{
        loadImg(imgPath) {
            return images('./' + imgPath).default
        },
    },
    data() {
        return {
            User: User
        }
    }
    }
</script>