import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChannelFileRoutingModule } from './channel-file-routing.module';
import { ChannelFileComponent } from './channel-file.component';
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
    ChannelFileComponent
  ],
  imports: [
    CommonModule,
    ChannelFileRoutingModule,
    PerfectScrollbarModule
  ],
  providers: [ {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
  }],
})
export class ChannelFileModule { }
