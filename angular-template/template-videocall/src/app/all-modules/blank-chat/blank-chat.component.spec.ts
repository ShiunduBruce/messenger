import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankChatComponent } from './blank-chat.component';

describe('BlankChatComponent', () => {
  let component: BlankChatComponent;
  let fixture: ComponentFixture<BlankChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlankChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
