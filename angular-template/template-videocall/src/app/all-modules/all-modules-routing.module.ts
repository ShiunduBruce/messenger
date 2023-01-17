import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllModulesComponent } from './all-modules.component';

const routes: Routes = [
  {
    path: '',
    component: AllModulesComponent,
    children: [
      {
        path: 'login',
        loadChildren: () =>
          import('./login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'blank-meet',
        loadChildren: () =>
          import('./blank-meet/blank-meet.module').then((m) => m.BlankMeetModule),
      },
      {
        path: 'join-call',
        loadChildren: () =>
          import('./join-call/join-call.module').then((m) => m.JoinCallModule),
      },
      {
        path: 'create-password',
        loadChildren: () =>
          import('./create-password/create-password.module').then(
            (m) => m.CreatePasswordModule
          ),
      },
      {
        path: 'forgot-password',
        loadChildren: () =>
          import('./forgot-password/forgot-password.module').then(
            (m) => m.ForgotPasswordModule
          ),
      },
      {
        path: 'meeting-call2',
        loadChildren: () =>
          import('./meeting-call2/meeting-call2.module').then(
            (m) => m.MeetingCall2Module
          ),
      },
      {
        path: 'meetingcall-grid',
        loadChildren: () =>
          import('./meetingcall-grid/meetingcall-grid.module').then(
            (m) => m.MeetingcallGridModule
          ),
      },
      {
        path: 'meetingcall-horizontal',
        loadChildren: () =>
          import('./meetingcall-horizontal/meetingcall-horizontal.module').then(
            (m) => m.MeetingcallHorizontalModule
          ),
      },
      {
        path: 'meetingcall-multigrid',
        loadChildren: () =>
          import('./meetingcall-multigrid/meetingcall-multigrid.module').then(
            (m) => m.MeetingcallMultigridModule
          ),
      },
      {
        path: 'meeting-call-multigrid2',
        loadChildren: () =>
          import(
            './meeting-call-multigrid2/meeting-call-multigrid2.module'
          ).then((m) => m.MeetingCallMultigrid2Module),
      },
      {
        path: 'meetingcall-vertical',
        loadChildren: () =>
          import('./meetingcall-vertical/meetingcall-vertical.module').then(
            (m) => m.MeetingcallVerticalModule
          ),
      },
      {
        path: 'meeting-call-vertical2',
        loadChildren: () =>
          import('./meeting-call-vertical2/meeting-call-vertical2.module').then(
            (m) => m.MeetingCallVertical2Module
          ),
      },
      {
        path: 'register',
        loadChildren: () =>
          import('./register/register.module').then((m) => m.RegisterModule),
      },
  {
    path: 'meeting-single-user',
    loadChildren: () =>
      import('./meeting-single-user/meeting-single-user.module').then(
        (m) => m.MeetingSingleUserModule
      ),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'blank-channels',
    loadChildren: () =>
      import('./blank-channels/blank-channels.module').then(
        (m) => m.BlankChannelsModule
      ),
  },
  {
    path: 'blank-chat',
    loadChildren: () =>
      import('./blank-chat/blank-chat.module').then((m) => m.BlankChatModule),
  },
  {
    path: 'blank-files',
    loadChildren: () =>
      import('./blank-files/blank-files.module').then(
        (m) => m.BlankFilesModule
      ),
  },
  {
    path: 'channel-file',
    loadChildren: () =>
      import('./channel-file/channel-file.module').then(
        (m) => m.ChannelFileModule
      ),
  },
  {
    path: 'channels',
    loadChildren: () =>
      import('./channels/channels.module').then((m) => m.ChannelsModule),
  },
  {
    path: 'chats',
    loadChildren: () =>
      import('./chats/chats.module').then((m) => m.ChatsModule),
  },
],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllModulesRoutingModule {}
