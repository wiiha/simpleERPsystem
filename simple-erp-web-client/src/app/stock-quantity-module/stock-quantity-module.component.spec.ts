import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockQuantityModuleComponent } from './stock-quantity-module.component';

describe('StockQuantityModuleComponent', () => {
  let component: StockQuantityModuleComponent;
  let fixture: ComponentFixture<StockQuantityModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockQuantityModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockQuantityModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
