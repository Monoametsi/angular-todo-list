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
  selectedtask:Task[] = selectedTasks;
  constructor() { }

  ngOnInit(): void {
  }

  faTimesIcon = faTimesCircle;
   
  text: string = "Remove Selected";
  
  onClick(taskArr: Task[]){
	  console.log(taskArr.length)
  }
  
}
