import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JoinCallRoutingModule } from './join-call-routing.module';
import { JoinCallComponent } from './join-call.component';
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
    JoinCallComponent
  ],
  imports: [
    CommonModule,
    JoinCallRoutingModule,
    PerfectScrollbarModule
  ],
  providers: [ {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
  }],
})
export class JoinCallModule { }
