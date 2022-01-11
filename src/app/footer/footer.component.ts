import { Component, OnInit } from '@angular/core';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  faTimesIcon = faTimesCircle;
   
  text: string = "Remove Selected";
}
