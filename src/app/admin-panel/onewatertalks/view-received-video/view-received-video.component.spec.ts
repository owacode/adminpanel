import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewReceivedVideoComponent } from './view-received-video.component';

describe('ViewReceivedVideoComponent', () => {
  let component: ViewReceivedVideoComponent;
  let fixture: ComponentFixture<ViewReceivedVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewReceivedVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewReceivedVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
