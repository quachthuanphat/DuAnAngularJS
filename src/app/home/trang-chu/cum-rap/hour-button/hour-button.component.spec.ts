import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourButtonComponent } from './hour-button.component';

describe('HourButtonComponent', () => {
  let component: HourButtonComponent;
  let fixture: ComponentFixture<HourButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
