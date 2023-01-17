<template>
  <div id="app">
    <loader></loader>
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  // beforeCreate() {
  //     this.$nextTick(function () {
  //         if(window.location.pathname.includes("admin")) {
  //           var head  = document.getElementsByTagName('head')[0];
  //           var link  = document.createElement('link');
  //           link.id   = "mycss";
  //           link.rel  = 'stylesheet';
  //           link.type = 'text/css';
  //           link.href = 'https://dreamschat-vuejs.dreamguystech.com/template/static/css/style.css';
  //           head.appendChild(link);
  //           }  else  {
  //           var head  = document.getElementsByTagName('head')[0];
  //           var link  = document.createElement('link');
  //           link.id   = "mycss2";
  //           link.rel  = 'stylesheet';
  //           link.type = 'text/css';
  //           link.href = 'https://dreamschat-vuejs.dreamguystech.com/template/static/css/app.css';
  //           head.appendChild(link);
  //         }
  //     })
  //   },
}
</script>


