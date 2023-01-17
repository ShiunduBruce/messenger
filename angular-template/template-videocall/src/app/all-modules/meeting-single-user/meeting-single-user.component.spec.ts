import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingSingleUserComponent } from './meeting-single-user.component';

describe('MeetingSingleUserComponent', () => {
  let component: MeetingSingleUserComponent;
  let fixture: ComponentFixture<MeetingSingleUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeetingSingleUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingSingleUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
