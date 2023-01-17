
//main
import Index from '../MainPage/chatindex';
import Group from '../MainPage/group';
import Status from '../MainPage/status';
import CallLog from '../MainPage/call_log';

export default [  
   {
      path: 'index',
      component: Index
   },
   {
      path: 'group',
      component: Group
   },
   {
      path: 'status',
      component: Status
   },
   {
      path: 'call-log',
      component: CallLog
   }
]