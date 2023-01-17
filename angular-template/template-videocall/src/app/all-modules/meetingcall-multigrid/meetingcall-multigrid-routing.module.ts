import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetingcallMultigridComponent } from './meetingcall-multigrid.component';

const routes: Routes = [{ path: '', component: MeetingcallMultigridComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingcallMultigridRoutingModule { }
