import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingcallMultigridRoutingModule } from './meetingcall-multigrid-routing.module';
import { MeetingcallMultigridComponent } from './meetingcall-multigrid.component';


@NgModule({
  declarations: [
    MeetingcallMultigridComponent
  ],
  imports: [
    CommonModule,
    MeetingcallMultigridRoutingModule
  ]
})
export class MeetingcallMultigridModule { }
