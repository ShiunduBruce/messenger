import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingCallMultigrid2RoutingModule } from './meeting-call-multigrid2-routing.module';
import { MeetingCallMultigrid2Component } from './meeting-call-multigrid2.component';


@NgModule({
  declarations: [
    MeetingCallMultigrid2Component
  ],
  imports: [
    CommonModule,
    MeetingCallMultigrid2RoutingModule
  ]
})
export class MeetingCallMultigrid2Module { }
