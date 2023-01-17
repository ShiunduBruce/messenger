import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankFilesRoutingModule } from './blank-files-routing.module';
import { BlankFilesComponent } from './blank-files.component';
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
    BlankFilesComponent
  ],
  imports: [
    CommonModule,
    BlankFilesRoutingModule,
    PerfectScrollbarModule
  ],
  providers: [ {
    provide: PERFECT_SCROLLBAR_CONFIG,
    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
  }],
})
export class BlankFilesModule { }
