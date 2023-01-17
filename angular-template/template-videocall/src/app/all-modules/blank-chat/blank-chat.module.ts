import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankChatRoutingModule } from './blank-chat-routing.module';
import { BlankChatComponent } from './blank-chat.component';
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
    BlankChatComponent
  ],
  imports: [
    CommonModule,
    BlankChatRoutingModule,
    PerfectScrollbarModule
  ],
  providers: [ {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
  }],
})
export class BlankChatModule { }
