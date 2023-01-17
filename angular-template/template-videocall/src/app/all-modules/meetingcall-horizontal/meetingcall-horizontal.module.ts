import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingcallHorizontalRoutingModule } from './meetingcall-horizontal-routing.module';
import { MeetingcallHorizontalComponent } from './meetingcall-horizontal.component';


@NgModule({
  declarations: [
    MeetingcallHorizontalComponent
  ],
  imports: [
    CommonModule,
    MeetingcallHorizontalRoutingModule
  ]
})
export class MeetingcallHorizontalModule { }
