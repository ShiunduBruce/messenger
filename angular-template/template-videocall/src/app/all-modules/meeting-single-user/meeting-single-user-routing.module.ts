import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MeetingSingleUserComponent } from './meeting-single-user.component';

const routes: Routes = [{ path: '', component: MeetingSingleUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MeetingSingleUserRoutingModule { }
