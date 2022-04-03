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

  // TASKS

  async addTask(task: Task) {
    const taskArray = await this.getTasksArray();
    task.id = Date.now();
    taskArray.push(task);
    return Storage.set({ key: TASK_KEY, value: JSON.stringify(taskArray) });
  }

  async getTasks() {
    const tasksArray = await this.getTasksArray();
    return tasksArray;
  }

  // Priority colors for tasks

  getPriorities() {
    return [
      {
        value: 1,
        color: '#ff0000',
      },
      {
        value: 2,
        color: '#ff9d46',
      },
      {
        value: 3,
        color: '#0000ff',
      },
      {
        value: 4,
        color: '#737373',
      },
    ];
  }

  // PRIVATE

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

  private async getTasksArray() {
    const tasks = await Storage.get({ key: TASK_KEY });
    let tasksArray = [];

    if (tasks.value) {
      tasksArray = JSON.parse(tasks.value);
    }
    return tasksArray;
  }
}
