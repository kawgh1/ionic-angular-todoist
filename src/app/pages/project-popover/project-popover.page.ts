import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { DataService, Project } from 'src/app/services/data.service';

@Component({
  selector: 'app-project-popover',
  templateUrl: './project-popover.page.html',
  styleUrls: ['./project-popover.page.scss'],
})
export class ProjectPopoverPage implements OnInit {
  projects = [];

  constructor(
    private dataService: DataService,
    private popoverCtrl: PopoverController
  ) {}

  ngOnInit() {
    this.dataService.getProjects().then((projects) => {
      this.projects = projects;
    });
  }

  selectProject(project: Project) {
    // just like with a modal, we can dismiss the popover with information
    // and pass that information to another page
    // here we pass the project and we will receive it in the overview page
    this.popoverCtrl.dismiss({ project });
  }
}
