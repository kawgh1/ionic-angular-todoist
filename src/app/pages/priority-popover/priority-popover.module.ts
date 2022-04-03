import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PriorityPopoverPageRoutingModule } from './priority-popover-routing.module';

import { PriorityPopoverPage } from './priority-popover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PriorityPopoverPageRoutingModule
  ],
  declarations: [PriorityPopoverPage]
})
export class PriorityPopoverPageModule {}
