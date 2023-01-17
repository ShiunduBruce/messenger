import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetingCallVertical2Component } from './meeting-call-vertical2.component';

const routes: Routes = [{ path: '', component: MeetingCallVertical2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingCallVertical2RoutingModule { }
