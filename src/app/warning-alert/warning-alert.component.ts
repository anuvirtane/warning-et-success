import { Component, OnInit } from '@angular/core';
import { faBookDead } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
faBookDead = faBookDead;
  constructor() { }

  ngOnInit(): void {
  }

}
