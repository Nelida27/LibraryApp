import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeCategoryModalComponent } from './change-category-modal.component';

describe('ChangeCategoryModalComponent', () => {
  let component: ChangeCategoryModalComponent;
  let fixture: ComponentFixture<ChangeCategoryModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangeCategoryModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeCategoryModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
