import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchmapUsecaseComponent } from './switchmap-usecase.component';

describe('SwitchmapUsecaseComponent', () => {
  let component: SwitchmapUsecaseComponent;
  let fixture: ComponentFixture<SwitchmapUsecaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchmapUsecaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchmapUsecaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
