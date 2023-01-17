import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetingCallMultigrid2Component } from './meeting-call-multigrid2.component';

const routes: Routes = [{ path: '', component: MeetingCallMultigrid2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingCallMultigrid2RoutingModule { }
