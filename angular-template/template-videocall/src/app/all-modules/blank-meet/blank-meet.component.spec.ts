import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankMeetComponent } from './blank-meet.component';

describe('BlankMeetComponent', () => {
  let component: BlankMeetComponent;
  let fixture: ComponentFixture<BlankMeetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlankMeetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankMeetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
