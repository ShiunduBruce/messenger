import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankChannelsComponent } from './blank-channels.component';

describe('BlankChannelsComponent', () => {
  let component: BlankChannelsComponent;
  let fixture: ComponentFixture<BlankChannelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlankChannelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankChannelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
