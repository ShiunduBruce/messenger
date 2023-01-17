import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelFileComponent } from './channel-file.component';

const routes: Routes = [{ path: '', component: ChannelFileComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChannelFileRoutingModule { }
