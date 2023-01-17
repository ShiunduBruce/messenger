import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingSingleUserRoutingModule } from './meeting-single-user-routing.module';
import { MeetingSingleUserComponent } from './meeting-single-user.component';


@NgModule({
  declarations: [
    MeetingSingleUserComponent
  ],
  imports: [
    CommonModule,
    MeetingSingleUserRoutingModule
  ]
})
export class MeetingSingleUserModule { }
