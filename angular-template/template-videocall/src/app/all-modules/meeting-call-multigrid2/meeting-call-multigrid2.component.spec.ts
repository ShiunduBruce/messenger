import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingCallMultigrid2Component } from './meeting-call-multigrid2.component';

describe('MeetingCallMultigrid2Component', () => {
  let component: MeetingCallMultigrid2Component;
  let fixture: ComponentFixture<MeetingCallMultigrid2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingCallMultigrid2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingCallMultigrid2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
