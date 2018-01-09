import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: './cat-central.component.html',
  styleUrls: ['./cat-central.component.css']
})
export class CatCentralComponent implements OnInit {
  cats = [];
  loading = true;
  ngOnInit() {
    const temp = [];
    for (let i = 0; i < 500; i++) {
      temp.push(i);
    }
    Observable
      .timer(500)
      .subscribe(() => {
        this.cats = temp;
        this.loading = false;
      });
  }

  getLastNumber(idx: number) {
    const result = idx.toString()[idx.toString().length - 1];

    return +result === 0 ? 8 : result;
  }

  getName(condo: number) {
    const idx = +this.getLastNumber(condo);
    let title = '';

    switch (idx) {
      case 0: title = 'Molly';
        break;
      case 1: title = 'Jolly';
        break;
      case 2: title = 'Tolly';
        break;
      case 3: title = 'Harry';
        break;
      case 4: title = 'Terry';
        break;
      case 5: title = 'Betty';
        break;
      case 6: title = 'Freddy';
        break;
      case 7: title = 'Nancy';
        break;
      case 8: title = 'Jerry';
        break;
      case 9: title = 'Berry';
        break;
    }

    return title;
  }
}
