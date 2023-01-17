import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingcallHorizontalComponent } from './meetingcall-horizontal.component';

describe('MeetingcallHorizontalComponent', () => {
  let component: MeetingcallHorizontalComponent;
  let fixture: ComponentFixture<MeetingcallHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingcallHorizontalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingcallHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
