import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowReportsComponent } from './show-reports.component';

describe('ShowReportsComponent', () => {
  let component: ShowReportsComponent;
  let fixture: ComponentFixture<ShowReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
