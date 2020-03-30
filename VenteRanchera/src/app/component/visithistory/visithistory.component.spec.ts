import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisithistoryComponent } from './visithistory.component';

describe('VisithistoryComponent', () => {
  let component: VisithistoryComponent;
  let fixture: ComponentFixture<VisithistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisithistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisithistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
