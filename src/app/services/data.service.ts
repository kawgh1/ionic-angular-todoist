import { Injectable } from '@angular/core';
// import { Plugins } from '@capacitor/core';
import { Storage } from '@capacitor/storage';

// eslint-disable-next-line @typescript-eslint/naming-convention
// const { Storage } = Plugins;

const PROJECT_KEY = 'categories';
const TASK_KEY = 'tasks';

export interface Project {
  name: string;
  color: string;
  id?: number;
  task?: Task[];
}

export interface Task {
  name: string;
  project?: number;
  priority?: number;
  due?: string;
  done?: boolean;
  id?: number;
}

@Injectable({
  providedIn: 'root',
})

// using promises and not observables
export class DataService {
  constructor() {}

  async addProject(proj: Project) {
    // pass false to prevent adding inbox
    const projArray = await this.getProjectsAsArray(false);
    // set project id
    proj.id = Date.now();
    // add project to project array
    projArray.push(proj);

    // project object to JSON string
    return Storage.set({ key: PROJECT_KEY, value: JSON.stringify(projArray) });
  }

  async getProjects() {
    return this.getProjectsAsArray();
  }

  private async getProjectsAsArray(addInbox = true) {
    const projects = await Storage.get({ key: PROJECT_KEY });

    console.log('projects', projects);
    let projArray = [];

    if (projects.value) {
      projArray = JSON.parse(projects.value);
    }

    if (addInbox) {
      projArray.push({
        name: 'Inbox',
        color: '#92949c',
        id: 0,
        tasks: [],
      });
    }

    return projArray;
  }
}
