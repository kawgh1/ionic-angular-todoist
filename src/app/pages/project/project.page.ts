import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService, Project } from 'src/app/services/data.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.page.html',
  styleUrls: ['./project.page.scss'],
})
export class ProjectPage implements OnInit {
  project: Project = null;

  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // param map grabs the project id from the URL
    // we then set a subscriber on that route URL
    // to the dataService.getProjectById - id from param map
    // this ensures that when we load this project page, the data
    // is fresh and direct from dataService
    // - and not from a stored data object that could be stale
    this.activatedRoute.paramMap.subscribe((data) => {
      console.log('data: ', data);
      this.dataService.getProjectById(data.get('id')).then((proj) => {
        this.project = proj;
        console.log('my project: ', proj);
      });
    });
  }
}
