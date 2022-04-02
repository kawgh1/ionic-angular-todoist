import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewProjectModalPage } from './new-project-modal.page';

const routes: Routes = [
  {
    path: '',
    component: NewProjectModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewProjectModalPageRoutingModule {}
