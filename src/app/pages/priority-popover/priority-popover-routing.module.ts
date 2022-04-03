import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PriorityPopoverPage } from './priority-popover.page';

const routes: Routes = [
  {
    path: '',
    component: PriorityPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PriorityPopoverPageRoutingModule {}
