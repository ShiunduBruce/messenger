import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankMeetRoutingModule } from './blank-meet-routing.module';
import { BlankMeetComponent } from './blank-meet.component';
import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
} from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    BlankMeetComponent
  ],
  imports: [
    CommonModule,
    BlankMeetRoutingModule,
    PerfectScrollbarModule
  ],
  providers: [ {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
  }],
})
export class BlankMeetModule { }
