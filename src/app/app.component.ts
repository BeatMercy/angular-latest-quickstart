import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  circle = [{ id: 1 }, { id: 2 }, { id: 3 }];
  title = 'app';

  ngOnInit(): void {
    console.log('init app now');
  }
}
