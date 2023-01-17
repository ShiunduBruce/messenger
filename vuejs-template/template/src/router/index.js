import {createRouter, createWebHistory} from 'vue-router';
import Index from '../views/dashboard/Index'
import Calllog from '../views/calllog/Calllog'
import Password from '../views/forgotpassword/password'
import Group from '../views/groupcall/Group'
import login1 from '../views/login1'
import register from '../views/register'
import Status from '../views/status/Status'
/***Admin routes***/
import Admin from '../views/admin/Index'
import Admob from '../views/admin/Admob'
import BlankPage from '../views/admin/BlankPage'
import BlockedUsers from '../views/admin/BlockedUsers'
import CallHistory from '../views/admin/CallHistory'
import ComingSoon from '../views/admin/ComingSoon'
import Error from '../views/admin/Error'
import FirebaseSettings from '../views/admin/FirebaseSettings'
import ForgotPassword from '../views/admin/ForgotPassword'
import General from '../views/admin/General'
import GroupHistory from '../views/admin/GroupHistory'
import Login from '../views/admin/Login'
import ReportUsers from '../views/admin/ReportUsers'
import SinchSettings from '../views/admin/SinchSettings'
import Users from '../views/admin/Users'
import Components from '../views/admin/Components'
import Datatables from '../views/admin/Datatables'
import Formbasicinputs from '../views/admin/Formbasicinputs'
import Formhorizontal from '../views/admin/Formhorizontal'
import Forminputgroups from '../views/admin/Forminputgroups'
import Formmask from '../views/admin/Formmask'
import Formvalidation from '../views/admin/Formvalidation'
import Formvertical from '../views/admin/Formvertical'
import Tablesbasic from '../views/admin/Tablesbasic'
const routes = [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/index',
      name: 'indexx',
      component: Index
    },
    {
      path: '/call-log',
      name: 'call-log',
      component: Calllog
    },
    {
      path: '/forgot-password1',
      name: 'forgot-password1',
      component: Password
    },
    {
      path: '/group',
      name: 'group',
      component: Group
    },
    {
      path: '/login1',
      name: 'login1',
      component: login1
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/status',
      name: 'status',
      component: Status
    },
    {
      path: '/admin/index',
      name: 'admin',
      component: Admin
    },
    {
      path: '/admin/admob',
      name: 'admob',
      component: Admob
    },
    {
      path: '/admin/blank-page',
      name: 'blank-page',
      component: BlankPage
    },
    {
      path: '/admin/blocked-users',
      name: 'blocked-users',
      component: BlockedUsers
    },
    {
      path: '/admin/call-history',
      name: 'call-history',
      component: CallHistory
    },
    {
      path: '/admin/coming-soon',
      name: 'coming-soon',
      component: ComingSoon
    },
    {
      path: '/admin/error',
      name: 'error',
      component: Error
    },
    {
      path: '/admin/firebase-settings',
      name: 'firebase-settings',
      component: FirebaseSettings
    },
    {
      path: '/admin/forgot-password',
      name: 'forgot-password',
      component: ForgotPassword
    },
    {
      path: '/admin/general',
      name: 'general',
      component: General
    },
    {
      path: '/admin/group-history',
      name: 'group-history',
      component: GroupHistory
    },
    {
      path: '/admin/login',
      name: 'login',
      component: Login
    },
    {
      path: '/admin/report-users',
      name: 'report-users',
      component: ReportUsers
    },
    {
      path: '/admin/sinch-settings',
      name: 'sinch-settings',
      component: SinchSettings
    },
    {
      path: '/admin/users',
      name: 'users',
      component: Users
    },
    {
      path: '/admin/components',
      name: 'components',
      component: Components
    },
    {
      path: '/admin/data-tables',
      name: 'data-tables',
      component: Datatables
    },
    {
      path: '/admin/form-basic-inputs',
      name: 'form-basic-inputs',
      component: Formbasicinputs
    },
    {
      path: '/admin/form-horizontal',
      name: 'form-horizontal',
      component: Formhorizontal
    },
    {
      path: '/admin/form-input-groups',
      name: 'form-input-groups',
      component: Forminputgroups
    },
    {
      path: '/admin/form-mask',
      name: 'form-mask',
      component: Formmask
    },
    {
      path: '/admin/form-validation',
      name: 'form-validation',
      component: Formvalidation
    },
    {
      path: '/admin/form-vertical',
      name: 'form-vertical',
      component: Formvertical
    },
    {
      path: '/admin/tables-basic',
      name: 'tables-basic',
      component: Tablesbasic
    }
  ];
  export const router = createRouter({
    history: createWebHistory('template'),
    linkActiveClass: 'active',
    routes
});