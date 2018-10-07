import { Component, OnInit } from '@angular/core';
import { Observable, of, Subscription, BehaviorSubject } from 'rxjs';
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

  backboneRecruitArrived = new Subject<string>();
  angularRecruitArrived = new Subject<string>();

  backboneEngineerQueue$ = this.backboneRecruitArrived.asObservable();
  angularEngineerQueue$ = this.angularRecruitArrived.asObservable();

  originalHotFrameworkTweets = new FormControl();
  originalHotFrameworkTweets$ = this.originalHotFrameworkTweets.valueChanges;
  originalRecruitment = [];

  hotFrameworkTweets = new FormControl();
  hotFrameworkTweets$ = this.hotFrameworkTweets.valueChanges;
  recruitment$;

  backboneRecruitsAmount = 1;
  angularRecruitsAmount = 1;

  showSwitchMapEffort = true;
  switchMapResult: string[];
  noSwitchMapResult: string[];
  constructor() {
    /*not using switchMap, and keep subscription on previous observable*/

    // let previousSub$: Subscription; // clear the side effort of existing subscription
    this.originalHotFrameworkTweets$.pipe(
      debounceTime(300),
      map(tweet => this.getAgency(tweet)),
    ).subscribe(recruits$ => {
      if (!this.showSwitchMapEffort) {
        recruits$.subscribe(recruit => this.logResult(recruit), error => { }, () => {
          console.log(`finish !!!`);

        });
      }
      // if (previousSub$) { previousSub$.unsubscribe(); }
      // previousSub$ = recruits$.subscribe(recruits => this.originalRecruitment = recruits);
    });

    /*using switchMap */
    this.recruitment$ = this.hotFrameworkTweets$.pipe(
      debounceTime(300),
      switchMap(tweet => this.getAgency(tweet))
    ).subscribe(recruit => {
      if (this.showSwitchMapEffort) {
        this.logResult(recruit);
      }
    });
  }

  ngOnInit() {
    this.switchMapResult = [];
    this.noSwitchMapResult = [];
    // agency recruit staff from everywhere.....
    this.loadRecruit();
  }

  getAgency(type: string): Observable<string> {
    switch (type) {
      case 'backbone': return this.backboneEngineerQueue$;
      case 'angular': return this.angularEngineerQueue$;
      default: return of('');
    }
  }

  shiftOutput() {
    this.showSwitchMapEffort = !this.showSwitchMapEffort;
  }

  /**
   * simulate engineer recruitment....
   */
  loadRecruit(): void {
    setInterval(() => {
      this.backboneRecruitArrived.next('Backbone Engineer No.' + this.backboneRecruitsAmount);
      this.backboneRecruitsAmount++;
    }, 1000);
    setInterval(() => {
      this.angularRecruitArrived.next('Angular Engineer No.' + this.angularRecruitsAmount);
      this.angularRecruitsAmount++;
    }, 600);
  }

  fillTextField(name: string) {
    if (this.showSwitchMapEffort) {
      this.hotFrameworkTweets.setValue(name);
    } else {
      this.originalHotFrameworkTweets.setValue(name);
    }
  }

  logResult(engineer: string) {
    if (this.showSwitchMapEffort) {
      this.switchMapResult.push(engineer);
    } else {
      this.noSwitchMapResult.push(engineer);
    }
  }
}
