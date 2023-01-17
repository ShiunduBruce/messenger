import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingcallVerticalComponent } from './meetingcall-vertical.component';

describe('MeetingcallVerticalComponent', () => {
  let component: MeetingcallVerticalComponent;
  let fixture: ComponentFixture<MeetingcallVerticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingcallVerticalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingcallVerticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
