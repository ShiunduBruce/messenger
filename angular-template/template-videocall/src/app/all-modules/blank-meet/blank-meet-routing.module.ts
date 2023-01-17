import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankMeetComponent } from './blank-meet.component';

const routes: Routes = [{ path: '', component: BlankMeetComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlankMeetRoutingModule { }
