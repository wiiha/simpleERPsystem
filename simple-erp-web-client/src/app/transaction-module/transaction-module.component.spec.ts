import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionModuleComponent } from './transaction-module.component';

describe('TransactionModuleComponent', () => {
  let component: TransactionModuleComponent;
  let fixture: ComponentFixture<TransactionModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransactionModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
