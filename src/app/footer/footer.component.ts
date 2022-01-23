import { Component, OnInit, Input } from '@angular/core';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { ServicesService } from '../services/services.service';
import { Task } from '../task';
import { tasks } from '../tasks';
import { selectedTasks } from '../selected-tasks';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  task:Task[] = tasks;
  selectedtasks:Task[] = selectedTasks;
  
  constructor(private servicesService: ServicesService) { }

  ngOnInit(): void {
  }

  faTimesIcon = faTimesCircle;
   
  text: string = "Remove Selected";
  
  onClick(selectedTask: Task[]){
	  const selectedtask2:Task[] = [];
	  const removeSelectedTasks = (task: Task) => {
		  this.servicesService.removeTask(task);
	  }
	  
	  tasks.map((task: Task) => {
		  this.selectedtasks.map((selectTask: Task) => {
			  if(task === selectTask){
				  selectedtask2.push(task);
			  }
		  })
	  })
	  
	  if(selectedTask.length > 0){
		selectedtask2.forEach(removeSelectedTasks);
	  }
  }
  
}
