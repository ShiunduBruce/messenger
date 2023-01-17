// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import { createApp } from 'vue';
import { router } from './router';
import App from "./App.vue";
import LayoutHeader from './views/layout/Header'
import LayoutSidebar from './views/layout/Sidebar'
import LayoutNavadmin from './views/layout/Navadmin'
import Navbarright from './components/navbarright'
import Mobile from './components/mobile'
import Logo from './components/logo'
import loader from './views/loader'
import Archivedmodal from './views/archived/archivedmodal'
import Archivedright from './views/archived/archivedright'
import Archivedmiddle from './views/archived/archivedmiddle'
import Archivedleft from './views/archived/archivedleft'
import './assets/css/bootstrap.rtl.min.css'
import './assets/css/bootstrap.bundle.min.js'
import './assets/css/font-awesome.min.css'
import './assets/fontawesome/css/fontawesome.min.css'
import './assets/fontawesome/css/all.min.css'
import './assets/css/feathericon.min.css'
import jquery from 'jquery'; 
window.$ = jquery
if(window.location.pathname.includes("template2-rtl/admin")) {
  require('./assets/css/select2.min.css');
  require('./assets/css/select2.min.js');
  require('./assets/css/style.css');
  require('./assets/css/jquery.maskedinput.min.js');
  require('./assets/css/bootstrap4.min.css');
  require('./assets/css/dataTables.bootstrap4.min.css');
  require('./assets/css/jquery.dataTables.min.js');
  require('./assets/css/dataTables.bootstrap4.min.js');
}else {
  require('./assets/css/app.css');
  require('./assets/css/jquery-ui.min.js');
  require('./assets/css/fancybox/jquery.fancybox.min.css');
  require('./assets/css/fancybox/jquery.fancybox.min.js');
}
const app = createApp(App)
app.component('layout-header', LayoutHeader);
app.component('layout-sidebar', LayoutSidebar);
app.component('layout-navadmin', LayoutNavadmin);
app.component('Loader', loader);
app.component('navbarright', Navbarright);
app.component('mobile', Mobile);
app.component('logo', Logo);
app.component('archivedmodal', Archivedmodal);
app.component('archivedright', Archivedright);
app.component('archivedmiddle', Archivedmiddle);
app.component('archivedleft', Archivedleft);
app.use(router)
.mount('#app');