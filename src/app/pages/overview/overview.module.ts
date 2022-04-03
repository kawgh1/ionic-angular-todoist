import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OverviewPageRoutingModule } from './overview-routing.module';

import { OverviewPage } from './overview.page';
import { NewProjectModalPageModule } from '../new-project-modal/new-project-modal.module';
import { ProjectPopoverPageModule } from '../project-popover/project-popover.module';
import { PriorityPopoverPageModule } from '../priority-popover/priority-popover.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OverviewPageRoutingModule,
    NewProjectModalPageModule,
    ProjectPopoverPageModule,
    PriorityPopoverPageModule,
  ],
  declarations: [OverviewPage],
})
export class OverviewPageModule {}
