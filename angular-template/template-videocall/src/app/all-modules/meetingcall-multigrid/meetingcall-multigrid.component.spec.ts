import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingcallMultigridComponent } from './meetingcall-multigrid.component';

describe('MeetingcallMultigridComponent', () => {
  let component: MeetingcallMultigridComponent;
  let fixture: ComponentFixture<MeetingcallMultigridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingcallMultigridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingcallMultigridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
