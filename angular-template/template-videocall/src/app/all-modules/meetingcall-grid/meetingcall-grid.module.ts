import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingcallGridRoutingModule } from './meetingcall-grid-routing.module';
import { MeetingcallGridComponent } from './meetingcall-grid.component';


@NgModule({
  declarations: [
    MeetingcallGridComponent
  ],
  imports: [
    CommonModule,
    MeetingcallGridRoutingModule
  ]
})
export class MeetingcallGridModule { }
