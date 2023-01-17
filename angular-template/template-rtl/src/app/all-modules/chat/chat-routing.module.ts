import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatComponent } from './chat.component';
import { ChatMainComponent } from './chat-main/chat-main.component';
import { ChatGroupComponent } from './chat-group/chat-group.component';
import { ChatStatusComponent } from './chat-status/chat-status.component';
import { ChatCallComponent } from './chat-call/chat-call.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: '',
    component: ChatComponent,
    children: [
      { path: 'chat-main', component: ChatMainComponent },
      { path: 'chat-group', component: ChatGroupComponent },
      { path: 'chat-status', component: ChatStatusComponent },
      { path: 'chat-call', component: ChatCallComponent },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatRoutingModule {}
