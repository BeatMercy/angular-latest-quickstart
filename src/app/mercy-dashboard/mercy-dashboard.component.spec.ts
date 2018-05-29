
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MercyDashboardComponent } from './mercy-dashboard.component';

describe('MercyDashboardComponent', () => {
  let component: MercyDashboardComponent;
  let fixture: ComponentFixture<MercyDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MercyDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MercyDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
