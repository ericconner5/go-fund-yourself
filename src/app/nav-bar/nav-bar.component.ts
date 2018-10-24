import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { routing } from '../app.routing';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  night: boolean = false;
  currentRoute: string = this.router.url;

  constructor(private router: Router) { }

  beginNightMode() {
    if (this.night === true) {
      return "night-mode nav-a-bar";
    } else {
      return "nav-a-bar";
    }
  }

  toggleNightMode() {
    if (this.night === true) {
      this.night = false;
    } else {
      this.night = true;
    }
  }

  ngOnInit() {
  }

}
