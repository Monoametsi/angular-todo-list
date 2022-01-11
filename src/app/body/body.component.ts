import { Component, OnInit } from '@angular/core';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { tasks } from '../tasks';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
  }

  faTimesIcon = faTimesCircle;
  faPencilIcon = faPencilAlt;
  taskArr = tasks;

}
