import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankFilesComponent } from './blank-files.component';

const routes: Routes = [{ path: '', component: BlankFilesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlankFilesRoutingModule { }
