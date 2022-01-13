import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../task';
import { tasks } from '../tasks';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  getTasks(): Observable<Task[]> {
    const allTasks = of(tasks);
    return allTasks;
  }
}