import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeefCategoryComponent } from './beef-category.component';

describe('BeefCategoryComponent', () => {
  let component: BeefCategoryComponent;
  let fixture: ComponentFixture<BeefCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeefCategoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeefCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
