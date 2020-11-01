import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import { interval } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private marriedDate = new Date(2010, 9, 7, 16, 0, 0, 0);
  private days = 0;
  private hours = 0;
  private minutes = 0;
  private seconds = 0;

  constructor() { }

  ngOnInit(): void {

    interval(1000).subscribe(() => {
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
