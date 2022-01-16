import { Component, OnInit } from '@angular/core';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { ServicesService } from '../services/services.service';
import { Task } from '../task';
import { tasks } from '../tasks';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  
  constructor(private servicesService: ServicesService) { }
  allTasks: Task[] = [];

  ngOnInit(): void {
   this.servicesService.getTasks().subscribe(tasks => this.allTasks = tasks);
  }
  
  faTimesIcon = faTimesCircle;
  faPencilIcon = faPencilAlt;
	
  deleteTask(task: Task){
	this.servicesService.removeTask(task).subscribe(tasks => this.allTasks = tasks);
  }
}
