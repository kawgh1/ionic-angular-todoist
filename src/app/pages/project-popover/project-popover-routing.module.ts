import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectPopoverPage } from './project-popover.page';

const routes: Routes = [
  {
    path: '',
    component: ProjectPopoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProjectPopoverPageRoutingModule {}
