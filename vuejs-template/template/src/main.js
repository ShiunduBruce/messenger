// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { createApp } from 'vue';
import { router } from './router';
import App from "./App.vue";
import LayoutHeader from './views/layout/Header'
import LayoutNavadmin from './views/layout/Navadmin'
import loader from './views/loader'
/************Page components ***********/
import Statussidebar from './views/status/statussidebar'
import Statuschat from './views/status/statuschat'
import Statusmodal from './views/status/statusmodal'
import Statusmodal1 from './views/status/statusmodal1'
import Dashboardsidebar from './views/dashboard/dashboardsidebar'
import Dashboardchat from './views/dashboard/dashboardchat'
import Dashboardmodal from './views/dashboard/dashboardmodal'
import Groupsidebar from './views/groupcall/groupsidebar'
import Groupchat from './views/groupcall/groupchat'
import Groupmodal from './views/groupcall/groupmodal'
import Grouprightsidebar from './views/groupcall/grouprightsidebar'
import Calllogsidebar from './views/calllog/calllogsidebar'
import Callchat from './views/calllog/calchat'
import Callmodal from './views/calllog/callmodal'
import Calllogrightsidebar from './views/calllog/calllogrightsidebar'

import './assets/css/bootstrap.min.css'
import './assets/css/bootstrap.bundle.min.js'
import './assets/css/font-awesome.min.css'
import './assets/fontawesome/css/fontawesome.min.css'
import './assets/fontawesome/css/all.min.css'
import './assets/css/feathericon.min.css'
import jquery from 'jquery'; 
window.$ = jquery
if(window.location.href.includes("template/admin")) {
  require('./assets/css/select2.min.css');
  require('./assets/css/select2.min.js');
  require('./assets/css/style.css');
  require('./assets/css/jquery.maskedinput.min.js');
  require('./assets/css/bootstrap4.min.css');
  require('./assets/css/dataTables.bootstrap4.min.css');
  require('./assets/css/jquery.dataTables.min.js');
  require('./assets/css/dataTables.bootstrap4.min.js');
}else {
  require('./assets/css/mcustomscroll/jquery.mCustomScrollbar.css');
  require('./assets/css/app.css');
  require('./assets/css/jquery.nicescroll.min.js');
  require('./assets/css/mcustomscroll/jquery.mCustomScrollbar.js');
}
const app = createApp(App)
app.component('layout-header', LayoutHeader);
app.component('layout-navadmin', LayoutNavadmin);
app.component('Loader', loader);
app.component('statussidebar', Statussidebar);
app.component('statuschat', Statuschat);
app.component('statusmodal', Statusmodal);
app.component('statusmodal1', Statusmodal1);
app.component('dashboardsidebar', Dashboardsidebar);
app.component('dashboardchat', Dashboardchat);
app.component('dashboardmodal', Dashboardmodal);
app.component('groupsidebar', Groupsidebar);
app.component('groupchat', Groupchat);
app.component('groupmodal', Groupmodal);
app.component('grouprightsidebar', Grouprightsidebar);
app.component('calllogsidebar', Calllogsidebar);
app.component('calchat', Callchat);
app.component('callmodal', Callmodal);
app.component('calllogrightsidebar', Calllogrightsidebar);
app.use(router)
.mount('#app');