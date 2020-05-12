import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RucContactResponsesComponent } from './ruc-contact-responses.component';

describe('RucContactResponsesComponent', () => {
  let component: RucContactResponsesComponent;
  let fixture: ComponentFixture<RucContactResponsesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RucContactResponsesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RucContactResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
