import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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