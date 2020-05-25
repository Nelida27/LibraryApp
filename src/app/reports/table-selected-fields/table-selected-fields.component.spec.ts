import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableSelectedFieldsComponent } from './table-selected-fields.component';

describe('TableSelectedFieldsComponent', () => {
  let component: TableSelectedFieldsComponent;
  let fixture: ComponentFixture<TableSelectedFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableSelectedFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableSelectedFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
