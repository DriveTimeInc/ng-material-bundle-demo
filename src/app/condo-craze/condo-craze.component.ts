import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/Rx';
import 'rxjs/add/observable/of';

@Component({
  templateUrl: './condo-craze.component.html',
  styleUrls: ['./condo-craze.component.css']
})
export class CondoCrazeComponent implements OnInit {
  condos = [];
  loading = true;
  ngOnInit() {
    const temp = [];
    for (let i = 0; i < 500; i++) {
      temp.push(i);
    }
    Observable
      .timer(500)
      .subscribe(() => {
        this.condos = temp;
        this.loading = false;
      });
  }

  getLastNumber(idx: number) {
    return idx.toString()[idx.toString().length - 1];
  }

  getTitle(condo: number) {
    const idx = +this.getLastNumber(condo);
    let title = '';

    switch (idx) {
      case 0: title = 'Epic Tower';
        break;
      case 1: title = 'Duplex Gray';
        break;
      case 2: title = 'Weird Tower';
        break;
      case 3: title = 'Too many cats';
        break;
      case 4: title = 'Almighty Kitty Tower';
        break;
      case 5: title = 'Paw Inception';
        break;
      case 6: title = 'Lounger 3000';
        break;
      case 7: title = 'Shark Launge';
        break;
      case 8: title = 'Only if it had wheels';
        break;
      case 9: title = 'I think this is a duplicate';
        break;
    }

    return title;
  }
}
