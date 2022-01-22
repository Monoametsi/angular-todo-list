import { Component, OnInit, Input } from '@angular/core';
import { Task } from '../task';
import { selectedTasks } from '../selected-tasks';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent implements OnInit {
  @Input() task: any;
  /* selectedtasks: Task[] = []; */
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  onSelect(event: any, task:Task){
	  for(let i: number = 0; i < selectedTasks.length; i++){
		  if(selectedTasks[i].id && task.id !== selectedTasks[i].id){
			  selectedTasks.push(task);
		  }
	  }
	  
	  console.log(selectedTasks)
  }
}
