import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingCallVertical2RoutingModule } from './meeting-call-vertical2-routing.module';
import { MeetingCallVertical2Component } from './meeting-call-vertical2.component';


@NgModule({
  declarations: [
    MeetingCallVertical2Component
  ],
  imports: [
    CommonModule,
    MeetingCallVertical2RoutingModule
  ]
})
export class MeetingCallVertical2Module { }
