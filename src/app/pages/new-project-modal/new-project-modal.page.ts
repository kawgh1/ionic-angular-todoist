import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ColorEvent } from 'ngx-color';
import { DataService, Project } from 'src/app/services/data.service';

@Component({
  selector: 'app-new-project-modal',
  templateUrl: './new-project-modal.page.html',
  styleUrls: ['./new-project-modal.page.scss'],
})
export class NewProjectModalPage implements OnInit {
  project: Project = {
    name: '',
    color: '#ff00ff',
  };

  showColors = false;

  constructor(
    private modalCtrl: ModalController,
    private dataService: DataService
  ) {}

  ngOnInit() {}

  colorSelected(event: ColorEvent) {
    this.project.color = event.color.hex;
  }

  async save() {
    await this.dataService.addProject(this.project);
    this.modalCtrl.dismiss({ reload: true });
  }

  cancel() {
    this.modalCtrl.dismiss();
  }
}
