import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewProjectModalPageRoutingModule } from './new-project-modal-routing.module';

import { NewProjectModalPage } from './new-project-modal.page';

import { ColorCircleModule } from 'ngx-color/circle';

// NEED TO IMPORT THIS NewProjectModalPageModule IN OVERVIEW.MODULE.TS

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewProjectModalPageRoutingModule,
    ColorCircleModule,
  ],
  declarations: [NewProjectModalPage],
})
export class NewProjectModalPageModule {}
