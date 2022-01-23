import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { faPencilAlt, faTimes } from '@fortawesome/free-solid-svg-icons';
import { ServicesService } from '../services/services.service';
import { Task } from '../task';
import { tasks } from '../tasks';

@Component({
  selector: 'app-update-btn',
  templateUrl: './update-btn.component.html',
  styleUrls: ['./update-btn.component.css']
})
export class UpdateBtnComponent implements OnInit {
  
  @Input() task: any;
  modalOpen?: boolean;
  formValue !: FormGroup;
  constructor(private formbuilder: FormBuilder, private servicesService: ServicesService) { }

  ngOnInit(): void {
	this.formValue = this.formbuilder.group({
      task : ['']
    })

  }
  
  faPencilIcon = faPencilAlt;
  closeModalIcon = faTimes;
  
   OpenModal(){
    this.modalOpen = true;
  }

  closeModal(){
    this.modalOpen = false;
  }

  closeModalEvent(event: any){
    if(event.target.id === "modal-cont"){
      this.modalOpen = false;
    }
  }

  onUpdate(row: any){
    this.formValue.controls['task'].setValue(row.task);
  }
  
  updateTask(task: Task){
	  task.task = this.formValue.value.task;
	  
	  this.servicesService.updateTask(task).subscribe((task) => {
		  this.closeModal();
		  this.formValue.reset();
	  });
  }

}
