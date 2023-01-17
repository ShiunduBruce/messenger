import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetingCall2Component } from './meeting-call2.component';

const routes: Routes = [{ path: '', component: MeetingCall2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingCall2RoutingModule { }
