import { Component, OnInit } from '@angular/core';
import {interval} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // private marriedDate = new Date(Date.UTC(2020, 10, 7, 16, 0, 0, 0));
  private marriedDate = new Date('2020-11-07T16:00:00.000-05:00');
  headerText = 'Married Since';
  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;

  constructor() {
  }

  ngOnInit(): void {

    interval(1000).subscribe(() => {
      if (new Date() < this.marriedDate) {
        this.headerText = 'Wedding Counter';
      }
      let diff = Math.abs(Date.now() - this.marriedDate.getTime()) / 1000 ;
      this.days = Math.floor(diff / 86400);
      diff -= this.days * 86400;
      // calculate (and subtract) whole hours
      this.hours = Math.floor(diff / 3600) % 24;
      diff -= this.hours * 3600;

      this.minutes = Math.floor(diff / 60) % 60;
      diff -= this.minutes * 60;

      this.seconds = Math.floor(diff % 60);
    });

  }

}
