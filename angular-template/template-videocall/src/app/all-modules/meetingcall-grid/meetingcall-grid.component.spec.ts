import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingcallGridComponent } from './meetingcall-grid.component';

describe('MeetingcallGridComponent', () => {
  let component: MeetingcallGridComponent;
  let fixture: ComponentFixture<MeetingcallGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingcallGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingcallGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
