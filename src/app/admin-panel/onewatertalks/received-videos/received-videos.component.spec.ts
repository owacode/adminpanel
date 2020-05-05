import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedVideosComponent } from './received-videos.component';

describe('ReceivedVideosComponent', () => {
  let component: ReceivedVideosComponent;
  let fixture: ComponentFixture<ReceivedVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
