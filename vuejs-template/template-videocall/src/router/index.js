import {createRouter, createWebHistory} from 'vue-router';
import createpassword from '../views/createpassword'
import forgotpassword from '../views/forgotpassword'
import index from '../views/index'
import joincall from '../views/joincall'
import meetingcall2 from '../views/meetingcall2'
import meetingcallmultigrid2 from '../views/meetingcallmultigrid2'
import meetingcallvertical2 from '../views/meetingcallvertical2'
import meetingcallgrid from '../views/meetingcallgrid'
import meetingcallhorizontal from '../views/meetingcallhorizontal'
import meetingcallmultigrid from '../views/meetingcallmultigrid'
import meetingcallvertical from '../views/meetingcallvertical'
import register from '../views/register'
import meetingsingleuser from '../views/meeting-single-user'
const routes = [
     {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/create-password',
      name: 'createpassword',
      component: createpassword
    },
    {
      path: '/forgot-password',
      name: 'forgotpassword',
      component: forgotpassword
    },
    {
      path: '/join-call',
      name: 'join-call',
      component: joincall
    },
    {
      path: '/meeting-call-2',
      name: 'meeting-call-2',
      component: meetingcall2
    },
    {
      path: '/meeting-call-multigrid-2',
      name: 'meetingcallmultigrid2',
      component: meetingcallmultigrid2
    },
    {
      path: '/meeting-call-vertical-2',
      name: 'meetingcallvertical2',
      component: meetingcallvertical2
    },
    {
      path: '/meetingcall-grid',
      name: 'meetingcall-grid',
      component: meetingcallgrid
    },
    {
      path: '/meetingcall-horizontal',
      name: 'meetingcall-horizontal',
      component: meetingcallhorizontal
    },
    {
      path: '/meetingcall-multigrid',
      name: 'meetingcall-multigrid',
      component: meetingcallmultigrid
    },
    {
      path: '/meetingcall-vertical',
      name: 'meetingcall-vertical',
      component: meetingcallvertical
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/meeting-single-user',
      name: 'meeting-single-user',
      component: meetingsingleuser
    },
  ];
export const router = createRouter({
    history: createWebHistory('template-videocall'),
    linkActiveClass: 'active',
    routes
});