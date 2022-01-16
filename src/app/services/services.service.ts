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
  
  addTask(task: string): Observable<Task[]> {
	let lastTaskId: number;
	if(tasks.length === 0){
		lastTaskId = 0;
	}else{
		lastTaskId = tasks[tasks.length - 1].id;
	}
	
	const newTask: Task = {
		id: (lastTaskId + 1),
		task: task
	}
	
	tasks.push(newTask);
	
	return of(tasks);
  }
  
  removeTask(task: Task): Observable<Task[]> {
	
	const findIndex = (tasks:Task): boolean => {
		return tasks.id === task.id;
	};
	
	const taskIndex: number = tasks.findIndex(findIndex);
	tasks.splice(taskIndex, 1);
	return of(tasks);
  }
}