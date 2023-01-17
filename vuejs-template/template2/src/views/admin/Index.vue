<template>
    <div class="main-wrapper">
        <layout-header></layout-header>
        <layout-navadmin></layout-navadmin>
                <!-- Page Wrapper -->
        <div class="page-wrapper">          
         <div class="content container-fluid">
                    <div class="row">
                        <div class="col-xl-4 col-sm-4 col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="dash-widget-header">
                                        <span class="dash-widget-icon bg-primary">
                                            <i class="fe fe-users"></i>
                                        </span>
                                        <div class="dash-count">
                                            <a href="javascript:void(0);" class="count-title">User Count</a>
                                            <a href="javascript:void(0);" class="count"> 10,320</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-sm-4 col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="dash-widget-header">
                                        <span class="dash-widget-icon bg-warning">
                                            <i class="fe fe-phone"></i>
                                        </span>
                                        <div class="dash-count">
                                            <a href="javascript:void(0);" class="count-title">Call Duration</a>
                                            <a href="javascript:void(0);" class="count"> 14,628</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-sm-4 col-12">
                            <div class="card">
                                <div class="card-body">
                                    <div class="dash-widget-header">
                                        <span class="dash-widget-icon bg-danger">
                                            <i class="fe fe-comments"></i>
                                        </span>
                                        <div class="dash-count">
                                            <a href="javascript:void(0);" class="count-title">Chat Count</a>
                                            <a href="javascript:void(0);" class="count"> 2,980</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                    <div class="row">
                        <div class="col-md-12 d-flex">
                        
                            <!-- Recent Orders -->
                            <div class="card card-table flex-fill">
                                <div class="card-header">
                                    <h4 class="card-title float-start">User List</h4>
                                    <div class="table-search float-end">
                                        <input type="text" class="form-control" placeholder="Search">
                                        <button class="btn" type="submit"><i class="fa fa-search"></i></button>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="table-responsive no-radius">
                                        <table class="table table-hover table-center">
                                            <thead>
                                                <tr>
                                                    <th>User Id</th>
                                                    <th>User Name</th>
                                                    <th class="text-center">Joined Date</th>
                                                    <th class="text-center">Last Seen</th>
                                                    <th class="text-end">Status</th>
                                                </tr>
                                            </thead>
                                             <tbody>
                                                <tr v-for="item in userlist" :key="item.id">
                                                    <td class="text-nowrap">
                                                        <div class="font-weight-600">{{item.userid}}</div>
                                                    </td>
                                                    <td class="text-nowrap">{{item.username}}</td>
                                                    <td class="text-center">{{item.joindate}}</td>
                                                    <td class="text-center">
                                                        {{item.lastseen}}
                                                    </td>
                                                    <td class="text-end">
                                                        <div class="font-weight-600 text-danger">{{item.status}}</div>
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
    import userlist from '../../assets/json/dashboard/userlist.json'
	export default {
	mounted() {
	},
    data() {
        return {
            userlist: userlist
        }
    }
    }
</script>