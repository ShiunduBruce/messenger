import { createApp } from 'vue';
import { router } from './router';
import './assets/css/bootstrap.min.css'
import './assets/plugins/fontawesome/css/fontawesome.min.css'
import './assets/plugins/fontawesome/css/all.min.css'
import './assets/plugins/feather/feather.css'

import App from "./App.vue";
import Header from './views/layout/Header'
import Header1 from './views/layout/Header1'
import Navbarright from './components/navbarright'
import Menu from './components/menu'
import Logo from './components/logo'
import Logo1 from './components/logo1'
import Navbarright1 from './components/navbarright1'
import jquery from 'jquery'; 
window.$ = jquery
import './assets/css/style.css'
import './assets/js/bootstrap.bundle.min.js'
import './assets/plugins/painterro/painterro.min.js'
import Raphael from 'raphael/raphael'

global.Raphael = Raphael
const app = createApp(App)
/** Layouts **/
app.component('layout-header', Header);
app.component('layout-header1', Header1);
app.component('navbarright', Navbarright);
app.component('menuheader', Menu);
app.component('logo', Logo);
app.component('logo1', Logo1);
app.component('navbarright1', Navbarright1);

app.use(router)
.mount('#app');