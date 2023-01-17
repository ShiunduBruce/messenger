import {createRouter, createWebHistory} from 'vue-router';
import Index from '../views/Index'
import Archived from '../views/archived/archived'
import AudioCallStart from '../views/AudioCallStart'
import AudioCall from '../views/AudioCall'
import AudioCallGroup from '../views/AudioCallGroup'
import AudioCallSingle from '../views/AudioCallSingle'
import Contacts from '../views/Contacts'
import ForgotpasswordEmail from '../views/ForgotpasswordEmail'
import ForgotpasswordMobile from '../views/ForgotpasswordMobile'
import Group from '../views/Group'
import LoginEmail from '../views/LoginEmail'
import LoginPhone from '../views/LoginPhone'
import OtpEmail from '../views/OtpEmail'
import OtpMobile from '../views/OtpMobile'
import ResetPassword from '../views/ResetPassword'
import Settings from '../views/Settings'
import SignupEmail from '../views/SignupEmail'
import SignupMobile from '../views/SignupMobile'
import Status from '../views/Status'
import VideoCall from '../views/VideoCall'
import VideoCallGroup from '../views/VideoCallGroup'
import VideoCallSingle from '../views/VideoCallSingle'
/***Admin routes***/
import Admin from '../views/admin/Index'
import Admob from '../views/admin/Admob'
import BlankPage from '../views/admin/BlankPage'
import BlockedUsers from '../views/admin/BlockedUsers'
import CallHistory from '../views/admin/CallHistory'
import ComingSoon from '../views/admin/ComingSoon'
import Components from '../views/admin/Components'
import DataTables from '../views/admin/DataTables'
import Error from '../views/admin/Error'
import FirebaseSettings from '../views/admin/FirebaseSettings'
import ForgotPassword from '../views/admin/ForgotPassword'
import FormBasicInputs from '../views/admin/FormBasicInputs'
import FormHorizontal from '../views/admin/FormHorizontal'
import FormInputGroups from '../views/admin/FormInputGroups'
import FormMask from '../views/admin/FormMask'
import FormValidation from '../views/admin/FormValidation'
import FormVertical from '../views/admin/FormVertical'
import General from '../views/admin/General'
import GroupHistory from '../views/admin/GroupHistory'
import Login from '../views/admin/Login'
import ReportUsers from '../views/admin/ReportUsers'
import SinchSettings from '../views/admin/SinchSettings'
import TablesBasic from '../views/admin/TablesBasic'
import Users from '../views/admin/Users'
import VectorMaps from '../views/admin/VectorMaps'
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
      path: '/archived',
      name: 'archived',
      component: Archived
    },
    {
      path: '/audio-call-start',
      name: 'audio-call-start',
      component: AudioCallStart
    },
    {
      path: '/audio-call',
      name: 'audio-call',
      component: AudioCall
    },
    {
      path: '/audiocall-group',
      name: 'audiocall-group',
      component: AudioCallGroup
    },
    {
      path: '/audiocall-single',
      name: 'audiocall-single',
      component: AudioCallSingle
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/forgotpassword-email',
      name: 'forgotpassword-email',
      component: ForgotpasswordEmail
    },
    {
      path: '/forgotpassword-mobile',
      name: 'forgotpassword-mobile',
      component: ForgotpasswordMobile
    },
     {
      path: '/group',
      name: 'group',
      component: Group
    },
     {
      path: '/login-email',
      name: 'login-email',
      component: LoginEmail
    },
     {
      path: '/login-phone',
      name: 'login-phone',
      component: LoginPhone
    },
    {
      path: '/otp-email',
      name: 'otp-email',
      component: OtpEmail
    },
    {
      path: '/otp-mobile',
      name: 'otp-mobile',
      component: OtpMobile
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: ResetPassword
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings
    },
    {
      path: '/signup-email',
      name: 'signup-email',
      component: SignupEmail
    },
    {
      path: '/signup-mobile',
      name: 'signup-mobile',
      component: SignupMobile
    },
    {
      path: '/status',
      name: 'status',
      component: Status
    },
    {
      path: '/video-call',
      name: 'video-call',
      component: VideoCall
    },
    {
      path: '/videocall-group',
      name: 'videocall-group',
      component: VideoCallGroup
    },
    {
      path: '/videocall-single',
      name: 'videocall-single',
      component: VideoCallSingle
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
      path: '/admin/components',
      name: 'components',
      component: Components
    },
    {
      path: '/admin/data-tables',
      name: 'data-tables',
      component: DataTables
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
      path: '/admin/form-basic-inputs',
      name: 'form-basic-inputs',
      component: FormBasicInputs
    },
    {
      path: '/admin/form-horizontal',
      name: 'form-horizontal',
      component: FormHorizontal
    },
    {
      path: '/admin/form-input-groups',
      name: 'form-input-groups',
      component: FormInputGroups
    },
    {
      path: '/admin/form-mask',
      name: 'form-mask',
      component: FormMask
    },
    {
      path: '/admin/form-validation',
      name: 'form-validation',
      component: FormValidation
    },
    {
      path: '/admin/form-vertical',
      name: 'form-vertical',
      component: FormVertical
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
      path: '/admin/tables-basic',
      name: 'tables-basic',
      component: TablesBasic
    },
    {
      path: '/admin/users',
      name: 'users',
      component: Users
    },
    {
      path: '/admin/vector-maps',
      name: 'vector-maps',
      component: VectorMaps
    }
  ];
  export const router = createRouter({
    history: createWebHistory('template2-rtl'),
    linkActiveClass: 'active',
    routes
});