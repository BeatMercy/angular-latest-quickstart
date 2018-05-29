
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MercyNavComponent } from './mercy-nav.component';

describe('MercyNavComponent', () => {
  let component: MercyNavComponent;
  let fixture: ComponentFixture<MercyNavComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MercyNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MercyNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
