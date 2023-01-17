<template>
 <!-- Sidebar -->
        <div class="sidebar" id="sidebar">
         <div class="sidebar-inner slimscroll">
         <perfect-scrollbar class="scroll-area"  :settings="settings" @ps-scroll-y="scrollHanle"> 
					<div id="sidebar-menu" class="sidebar-menu">
						<ul>
							<li class="menu-title"> 
							</li>
							<li> 
								<router-link to="/admin/index"><i class="fe fe-home"></i> <span>Dashboard</span></router-link>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);"><i class="fe fe-users"></i> <span> Users</span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li><router-link to="/admin/users">Users</router-link></li>
									<li><router-link to="/admin/blocked-users">Blocked User</router-link></li>
									<li><router-link to="/admin/report-users">Report User</router-link></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);"><i class="fe fe-sync"></i> <span> History </span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li><router-link to="/admin/call-history"> Call History </router-link></li>
									<li><router-link to="/admin/group-history"> Group History </router-link></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);"><i class="fe fe-gear"></i> <span> Settings </span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li><router-link to="/admin/general">General</router-link></li>
									<li><router-link to="/admin/admob">Admob </router-link></li>
									<li><router-link to="/admin/sinch-settings">Sinch Settings </router-link></li>
									<li><router-link to="/admin/firebase-settings">Firebase Settings </router-link></li>
								</ul>
							</li>
							<li> 
								<router-link to="/admin/blank-page"><i class="fe fe-file"></i> <span>Blank Page</span></router-link>
							</li>
							<li> 
								<router-link to="/admin/components"><i class="fe fe-vector"></i> <span>Components</span></router-link>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);"><i class="fe fe-layout"></i> <span> Forms <span class="menu-arrow"></span></span></a>
								<ul style="display: none;">
									<li><router-link to="/admin/form-basic-inputs">Basic Inputs</router-link></li>
									<li><router-link to="/admin/form-input-groups">Input Groups</router-link></li>
									<li><router-link to="/admin/form-horizontal">Horizontal Form</router-link></li>
									<li><router-link to="/admin/form-vertical">Vertical Form </router-link></li>
									<li><router-link to="/admin/form-mask">Form Mask</router-link></li>
									<li><router-link to="/admin/form-validation">Form Validation</router-link></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);"><i class="fe fe-table"></i> <span> Tables <span class="menu-arrow"></span></span></a>
								<ul style="display: none;">
								<li><router-link to="/admin/tables-basic">Basic Tables </router-link></li>
								<li><router-link to="/admin/data-tables">Data Table </router-link></li>
								</ul>
							</li>
							<li class="submenu">
								<a href="javascript:void(0);"><i class="fe fe-code"></i> <span>Multi Level</span> <span class="menu-arrow"></span></a>
								<ul style="display: none;">
									<li class="submenu">
										<a href="javascript:void(0);"> <span>Level 1</span> <span class="menu-arrow"></span></a>
										<ul style="display: none;">
											<li><a href="javascript:void(0);"><span>Level 2</span></a></li>
											<li class="submenu">
												<a href="javascript:void(0);"> <span> Level 2</span> <span class="menu-arrow"></span></a>
												<ul style="display: none;">
													<li><a href="javascript:void(0);">Level 3</a></li>
													<li><a href="javascript:void(0);">Level 3</a></li>
												</ul>
											</li>
											<li><a href="javascript:void(0);"> <span>Level 2</span></a></li>
										</ul>
									</li>
									<li>
										<a href="javascript:void(0);"> <span>Level 1</span></a>
									</li>
								</ul>
							</li>
						</ul>
					</div>
					</perfect-scrollbar>
                </div>
            </div>
			<!-- /Sidebar -->

</template>
<script>
import {PerfectScrollbar}  from 'vue3-perfect-scrollbar'
    import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
    export default {
    	 components: {
    PerfectScrollbar ,
    },
  mounted() {

      $('#sidebar-menu a').on('click', function (e) {
        if ($(this).parent().hasClass('submenu')) {
          e.preventDefault();
        }
        if (!$(this).hasClass('subdrop')) {
          $('ul', $(this).parents('ul:first')).slideUp(350);
          $('a', $(this).parents('ul:first')).removeClass('subdrop');
          $(this).next('ul').slideDown(350);
          $(this).addClass('subdrop');
        } else if ($(this).hasClass('subdrop')) {
          $(this).removeClass('subdrop');
          $(this).next('ul').slideUp(350);
        }
      });
      $('#sidebar-menu ul li.submenu a.active').parents('li:last').children('a:first').addClass('active').trigger('click');

    },
    computed: {
        currentpage() {
          return this.$route.path;
        },
      },
  data() {
      return {
        settings: {
suppressScrollX: true,
},
        activeClass: 'active',
      };
              //  isactive : true
    },

}
</script>
<style>
    .scroll-area {
      position: relative;
      margin: auto;
      height: calc(100vh - 60px);
      background-color: transparent !important;
  }
 .sidebar-menu li a.active {
        background-color: #fff;
    color: #7c2296;
}
.sidebar-menu ul ul a.active {
    color: #dc94f1;
    background-color: unset;
}
</style>