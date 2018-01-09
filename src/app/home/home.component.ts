import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {
  }

  goToCatCentral() {
    this.router.navigate(['./cat']);
  }

  goToCondoCraze() {
    this.router.navigate(['./condo']);
  }
}
