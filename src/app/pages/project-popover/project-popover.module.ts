import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProjectPopoverPageRoutingModule } from './project-popover-routing.module';

import { ProjectPopoverPage } from './project-popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProjectPopoverPageRoutingModule
  ],
  declarations: [ProjectPopoverPage]
})
export class ProjectPopoverPageModule {}
