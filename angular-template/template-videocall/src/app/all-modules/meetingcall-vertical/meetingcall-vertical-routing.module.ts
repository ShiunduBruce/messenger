import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetingcallVerticalComponent } from './meetingcall-vertical.component';

const routes: Routes = [{ path: '', component: MeetingcallVerticalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingcallVerticalRoutingModule { }
