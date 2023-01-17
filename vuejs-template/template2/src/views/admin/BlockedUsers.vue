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
                                <h3 class="page-title">Blocked User</h3>
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item"><router-link to="/admin/index">Dashboard</router-link></li>
                                    <li class="breadcrumb-item active">Blocked User</li>
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
                                                    <th>User</th>
                                                    <th>Login time</th>
                                                    <th>Blocked date</th>
                                                    <th>Blocked reason</th>
                                                    <th>Blocked time</th>
                                                    <th class="text-end">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in blockuserlist" :key="item.id">
                                                    <td>
                                                        <h2 class="table-avatar">
                                                            <router-link to="/admin/general" class="avatar avatar-sm me-2"><img class="avatar-img rounded-circle" :src="loadImg(item.img)" alt="User Image"></router-link>
                                                            <router-link to="/admin/general">{{item.name}} <span>{{item.userid}}</span></router-link>
                                                        </h2>
                                                    </td>
                                                    <td>{{item.logintime}}</td>
                                                    <td>{{item.blockeddate}}</td>
                                                    <td>{{item.blockedreason}}</td>
                                                    <td>{{item.blockedtime}}</td>
                                                    <td class="text-end">
                                                        <div class="actions">
                                                        
                                                            <a href="javascript:void(0);" class="btn btn-sm bg-success-light me-2" title="Unblocked">
                                                                <i class="fe fe-disabled"></i>
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
    import blockuserlist from '../../assets/json/users/blockuserlist.json'
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
            blockuserlist: blockuserlist
        }
    }
    }
</script>