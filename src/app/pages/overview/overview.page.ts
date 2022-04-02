import { Component, OnInit } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';
import { NewProjectModalPage } from '../new-project-modal/new-project-modal.page';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {
  projects = [];
  constructor(
    private modalCtrl: ModalController,
    private routerOutlet: IonRouterOutlet,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    this.projects = await this.dataService.getProjects();
    console.log('my projects', this.projects);
  }

  async addCategory() {
    const modal = await this.modalCtrl.create({
      component: NewProjectModalPage,
      presentingElement: this.routerOutlet.nativeEl,
      swipeToClose: false,
    });

    await modal.present();
    // we want to listen to the results of our modal
    const result = await modal.onDidDismiss();

    if (result && result.data && result.data.reload) {
      this.loadData();
    }
  }
}
