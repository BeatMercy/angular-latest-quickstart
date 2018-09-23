import { Component, OnInit } from '@angular/core';
import { Observable, of, Subscription } from 'rxjs';
import { Subject } from 'rxjs/internal/Subject';
import { map } from 'rxjs/operators';
import { switchMap } from 'rxjs/internal/operators/switchMap';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/internal/operators/debounceTime';

@Component({
  selector: 'app-switchmap-use-case',
  templateUrl: './switchmap-usecase.component.html',
  styleUrls: ['./switchmap-usecase.component.css']
})
/**
 * auto complete component
 */
export class SwitchmapUsecaseComponent implements OnInit {
  title = 'SwitchMap - USECASE';
  originalHotFrameworkTweets = new FormControl();
  originalHotFrameworkTweets$ = this.originalHotFrameworkTweets.valueChanges;
  originalRecruitment = [];

  hotFrameworkTweets = new FormControl();
  hotFrameworkTweets$ = this.hotFrameworkTweets.valueChanges;
  recruitment$;

  backboneRecruits = ['backbone1'];
  angularRecruits = ['angualr1'];
  backboneAgency$ = of(this.backboneRecruits);
  angularAgency$ = of(this.angularRecruits);
  constructor() {
    /*not using switchMap */
    let previousSub$: Subscription;
    this.originalHotFrameworkTweets$.pipe(
      debounceTime(300),
      map(tweet => this.getAgency(tweet)),
    ).subscribe(recruits$ => {
      if (previousSub$) { previousSub$.unsubscribe(); }
      previousSub$ = recruits$.subscribe(recruits => this.originalRecruitment = recruits);
    });

    /*using switchMap */
    this.recruitment$ = this.hotFrameworkTweets$.pipe(
      debounceTime(300),
      switchMap(tweet => this.getAgency(tweet))
    );
  }

  ngOnInit() {
    // agency recruit staff from everywhere.....
    this.loadRecruit();
  }

  getAgency(type: string): Observable<String[]> {
    switch (type) {
      case 'backbone': return this.backboneAgency$;
      case 'angular': return this.angularAgency$;
      default: return of([]);
    }
  }

  clearRecruit() {
    for (let i = 0; i < this.angularRecruits.length; i++) {
      this.angularRecruits.pop();
    }
    for (let i = 0; i < this.backboneRecruits.length; i++) {
      this.backboneRecruits.pop();
    }
  }

  loadRecruit(): void {
    setInterval(() => {
      if (this.backboneRecruits.length < 20) {
        this.backboneRecruits.push('backbone' + (this.backboneRecruits.length + 1));
      }
    }, 1000);
    setInterval(() => {
      if (this.angularRecruits.length < 20) {
        this.angularRecruits.push('angular' + (this.angularRecruits.length + 1));
      }
    }, 600);
  }
}
