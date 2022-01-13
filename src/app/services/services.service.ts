import { Injectable } from '@angular/core';
import { Task } from '../task';
import { tasks } from '../tasks';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  getTasks(): Task[] {
    return tasks;
  }
}