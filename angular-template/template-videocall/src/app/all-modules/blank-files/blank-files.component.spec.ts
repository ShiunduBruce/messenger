import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankFilesComponent } from './blank-files.component';

describe('BlankFilesComponent', () => {
  let component: BlankFilesComponent;
  let fixture: ComponentFixture<BlankFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlankFilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
