import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminchatComponent } from './adminchat.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersMainComponent } from './users-main/users-main.component';
import { BlockedUsersComponent } from './blocked-users/blocked-users.component';
import { ReportUsersComponent } from './report-users/report-users.component';
import { GroupChatComponent } from './group-chat/group-chat.component';
import { ChatComponent } from './chat/chat.component';
import { CallHistoryComponent } from './call-history/call-history.component';
import { GroupHistoryComponent } from './group-history/group-history.component';
import { AdmobComponent } from './admob/admob.component';
import { GeneralComponent } from './general/general.component';
import { SinchsettingsComponent } from './sinchsettings/sinchsettings.component';
import { FirebasesettingsComponent } from './firebasesettings/firebasesettings.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { VectorMapsComponent } from './vector-maps/vector-maps.component';
import { ComponentsComponent } from './components/components.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AdminchatComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'user', component: UsersMainComponent },
      { path: 'blockeduser', component: BlockedUsersComponent },
      { path: 'reportuser', component: ReportUsersComponent },
      { path: 'chat', component: ChatComponent },
      { path: 'groupchat', component: GroupChatComponent },
      { path: 'callhistory', component: CallHistoryComponent },
      { path: 'grouphistory', component: GroupHistoryComponent },
      { path: 'admob', component: AdmobComponent },
      { path: 'general', component: GeneralComponent },
      { path: 'sinchsettings', component: SinchsettingsComponent },
      { path: 'firebasesettings', component: FirebasesettingsComponent },
      { path: 'blankpage', component: BlankPageComponent },
      { path: 'vectormaps', component: VectorMapsComponent },
      { path: 'components', component: ComponentsComponent },
      { path: 'login', component: LoginComponent },
      { path: 'forgotpassword', component: ForgotPasswordComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminchatRoutingModule {}
