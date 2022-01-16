import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { ServicesService } from '../services/services.service';
import { Task } from '../task';
import { tasks } from '../tasks';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css']
})
export class InputFieldComponent implements OnInit {
  
  formValue !: FormGroup;
  
  constructor(private formbuilder: FormBuilder, private servicesService: ServicesService) { }
  
  ngOnInit(): void {
	this.formValue = this.formbuilder.group({
		task: ['']
	})
  }
  
  addTask(){
	if(this.formValue.value.task.trim().length === 0){
		alert("You need to fill the field!!!")
	}else{ 
		this.servicesService.addTask(this.formValue.value.task).subscribe((tasks) => {
			this.formValue.reset();
		});
	}
  }
  
}