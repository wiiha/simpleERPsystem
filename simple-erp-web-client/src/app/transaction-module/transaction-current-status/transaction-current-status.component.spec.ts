import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionCurrentStatusComponent } from './transaction-current-status.component';

describe('TransactionCurrentStatusComponent', () => {
  let component: TransactionCurrentStatusComponent;
  let fixture: ComponentFixture<TransactionCurrentStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionCurrentStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionCurrentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
