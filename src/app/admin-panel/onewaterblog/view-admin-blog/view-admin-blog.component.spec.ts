import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdminBlogComponent } from './view-admin-blog.component';

describe('ViewAdminBlogComponent', () => {
  let component: ViewAdminBlogComponent;
  let fixture: ComponentFixture<ViewAdminBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAdminBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdminBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
