<template>
 
 <!-- Header -->
            <header class="header fixed-position">
                <nav class="navbar navbar-expand-lg header-nav">
                    <logo></logo>
                    <menuheader></menuheader>
                    <navbarright></navbarright>
                </nav>
            </header>
            <!-- /Header -->

</template>


<script>
    import {PerfectScrollbar}  from 'vue3-perfect-scrollbar'
    import 'vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css'
    export default {
        components: {
         PerfectScrollbar 
        },
        computed: {
            currentPath() {
                return this.$route.name;
            }
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
    methods: {
    scrollHanle(evt) {
      console.log(evt)
    }
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
</style>