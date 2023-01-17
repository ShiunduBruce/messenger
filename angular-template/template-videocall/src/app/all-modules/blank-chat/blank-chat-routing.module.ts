import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankChatComponent } from './blank-chat.component';

const routes: Routes = [{ path: '', component: BlankChatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlankChatRoutingModule { }
