import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetingcallHorizontalComponent } from './meetingcall-horizontal.component';

const routes: Routes = [{ path: '', component: MeetingcallHorizontalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingcallHorizontalRoutingModule { }
