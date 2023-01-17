<template>
<div class="main-menu-wrapper">
                        <ul class="grid-menu">
                            <li v-bind:class="{'active': currentPath == 'meetingcallmultigrid2'}"><router-link to="/meetingcall-multigrid" class="tab-nav"><i class="fas fa-th"></i></router-link></li>
                            <li v-bind:class="{'active': currentPath == 'meetingcallvertical2'}"><router-link to="/meetingcall-vertical" class="tab-nav"><i class="fas fa-grip-vertical"></i></router-link></li>
                            <li v-bind:class="{'active': currentPath == 'meetingcall-horizontal' || currentPath == 'meeting-single-user'}"><router-link to="/meeting-call-2" class="tab-nav"><i class="fas fa-grip-horizontal"></i></router-link></li>
                            <li><router-link to="/meetingcall-grid" class="tab-nav"><i class="fas fa-th-large"></i></router-link></li>
                            <li><a href="javascript:void(0);" class="tab-nav win-maximize"><i class="fas fa-expand-alt"></i></a></li>
                        </ul>
                    </div>
</template>
<script>
export default {
  computed: {
	currentPath() {
				return this.$route.name;
			},

    },
data() {
    return {
      activeClass: 'active',
    };
            //  isactive : true
  },
}
</script>