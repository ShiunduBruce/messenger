import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingcallVerticalRoutingModule } from './meetingcall-vertical-routing.module';
import { MeetingcallVerticalComponent } from './meetingcall-vertical.component';


@NgModule({
  declarations: [
    MeetingcallVerticalComponent
  ],
  imports: [
    CommonModule,
    MeetingcallVerticalRoutingModule
  ]
})
export class MeetingcallVerticalModule { }
