import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankChannelsComponent } from './blank-channels.component';

const routes: Routes = [{ path: '', component: BlankChannelsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlankChannelsRoutingModule { }
