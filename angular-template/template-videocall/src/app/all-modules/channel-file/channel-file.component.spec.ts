import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelFileComponent } from './channel-file.component';

describe('ChannelFileComponent', () => {
  let component: ChannelFileComponent;
  let fixture: ComponentFixture<ChannelFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChannelFileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
