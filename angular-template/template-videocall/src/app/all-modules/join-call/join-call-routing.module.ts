import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JoinCallComponent } from './join-call.component';

const routes: Routes = [{ path: '', component: JoinCallComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JoinCallRoutingModule { }
