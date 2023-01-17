import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetingcallGridComponent } from './meetingcall-grid.component';

const routes: Routes = [{ path: '', component: MeetingcallGridComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingcallGridRoutingModule { }
