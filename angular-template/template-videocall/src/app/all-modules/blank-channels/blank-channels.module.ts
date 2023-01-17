import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankChannelsRoutingModule } from './blank-channels-routing.module';
import { BlankChannelsComponent } from './blank-channels.component';
import {
  PerfectScrollbarConfigInterface,
  PerfectScrollbarModule,
  PERFECT_SCROLLBAR_CONFIG,
} from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
};
@NgModule({
  declarations: [BlankChannelsComponent],
  imports: [CommonModule, BlankChannelsRoutingModule, PerfectScrollbarModule],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
})
export class BlankChannelsModule {}
