import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingCall2Component } from './meeting-call2.component';

describe('MeetingCall2Component', () => {
  let component: MeetingCall2Component;
  let fixture: ComponentFixture<MeetingCall2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingCall2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingCall2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
