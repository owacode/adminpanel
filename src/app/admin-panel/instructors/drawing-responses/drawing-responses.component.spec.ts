import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawingResponsesComponent } from './drawing-responses.component';

describe('DrawingResponsesComponent', () => {
  let component: DrawingResponsesComponent;
  let fixture: ComponentFixture<DrawingResponsesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawingResponsesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawingResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
