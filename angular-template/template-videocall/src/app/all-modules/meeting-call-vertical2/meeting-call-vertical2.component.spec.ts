import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingCallVertical2Component } from './meeting-call-vertical2.component';

describe('MeetingCallVertical2Component', () => {
  let component: MeetingCallVertical2Component;
  let fixture: ComponentFixture<MeetingCallVertical2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingCallVertical2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingCallVertical2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
