import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mercy-dashboard',
  templateUrl: './mercy-dashboard.component.html',
  styleUrls: ['./mercy-dashboard.component.css']
})
export class MercyDashboardComponent {
  cards = [
    { title: 'Card 1', cols: 2, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 2 },
    { title: 'Card 4', cols: 1, rows: 1 }
  ];
}
