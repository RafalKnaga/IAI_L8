import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogItemDetailComponent } from './blog-item-detail.component';

describe('BlogItemDetailComponent', () => {
  let component: BlogItemDetailComponent;
  let fixture: ComponentFixture<BlogItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
