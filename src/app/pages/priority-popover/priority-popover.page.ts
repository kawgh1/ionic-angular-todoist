import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-priority-popover',
  templateUrl: './priority-popover.page.html',
  styleUrls: ['./priority-popover.page.scss'],
})
export class PriorityPopoverPage implements OnInit {
  // not everything is a promise or observable
  // here we're just populating a static array with a method call
  priorities = this.dataService.getPriorities();

  constructor(
    private dataService: DataService,
    private popoverCtrl: PopoverController
  ) {}

  ngOnInit() {}

  selectPriority(priority) {
    // just like with a modal, we can dismiss the popover with information
    // and pass that information to another page
    // here we pass the priority and we will receive it in the overview page
    this.popoverCtrl.dismiss({ priority: priority.value });
  }
}
