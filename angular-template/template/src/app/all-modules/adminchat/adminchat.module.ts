import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminchatRoutingModule } from './adminchat-routing.module';
import { AdminchatComponent } from './adminchat.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { UsersMainComponent } from './users-main/users-main.component';
import { BlockedUsersComponent } from './blocked-users/blocked-users.component';
import { ReportUsersComponent } from './report-users/report-users.component';
import { ChatComponent } from './chat/chat.component';
import { GroupChatComponent } from './group-chat/group-chat.component';
import { CallHistoryComponent } from './call-history/call-history.component';
import { GroupHistoryComponent } from './group-history/group-history.component';
import { GeneralComponent } from './general/general.component';
import { AdmobComponent } from './admob/admob.component';
import { SinchsettingsComponent } from './sinchsettings/sinchsettings.component';
import { FirebasesettingsComponent } from './firebasesettings/firebasesettings.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { VectorMapsComponent } from './vector-maps/vector-maps.component';
import { ComponentsComponent } from './components/components.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { FunctioninvokeService } from './functioninvoke.service';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { LinkService } from 'src/app/link.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};

@NgModule({
  declarations: [
    AdminchatComponent,
    DashboardComponent,
    HeaderComponent,
    SidebarComponent,
    UsersMainComponent,
    BlockedUsersComponent,
    ReportUsersComponent,
    ChatComponent,
    GroupChatComponent,
    CallHistoryComponent,
    GroupHistoryComponent,
    GeneralComponent,
    AdmobComponent,
    SinchsettingsComponent,
    FirebasesettingsComponent,
    BlankPageComponent,
    VectorMapsComponent,
    ComponentsComponent,
    LoginComponent,
    ForgotPasswordComponent,
  ],
  imports: [CommonModule, AdminchatRoutingModule, PerfectScrollbarModule,NgbModule],
  providers: [
    FunctioninvokeService,
    LinkService,
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
})
export class AdminchatModule {}
