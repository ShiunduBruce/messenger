import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingCall2RoutingModule } from './meeting-call2-routing.module';
import { MeetingCall2Component } from './meeting-call2.component';


@NgModule({
  declarations: [
    MeetingCall2Component
  ],
  imports: [
    CommonModule,
    MeetingCall2RoutingModule
  ]
})
export class MeetingCall2Module { }
