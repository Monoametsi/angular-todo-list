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
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  onSelect(event: any, task:Task){
	  
	  const findIndex = (selectedtasks:Task): boolean => {
		return selectedtasks.id === task.id;
	  }
	  
	  if(event.srcElement.checked){
		  selectedTasks.push(task);
	  }else if(!event.srcElement.checked){
	  
		const selectedTaskIndex: number = selectedTasks.findIndex(findIndex);
		selectedTasks.splice(selectedTaskIndex, 1);
	  }
	  
  }
}
