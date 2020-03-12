import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { BackendService } from "src/app/services/backend.service";
import { StockLocation } from "src/app/models/StockLocation";
import { Product } from "src/app/models/Product";
import { Observable } from "rxjs";
import { Transaction } from "src/app/models/Transaction";

@Component({
  selector: "app-transaction-form",
  templateUrl: "./transaction-form.component.html",
  styleUrls: ["./transaction-form.component.sass"]
})
export class TransactionFormComponent implements OnInit {
  @Output() transactionSuccess = new EventEmitter<boolean>();

  @Output() currentSelection = new EventEmitter<{
    stockLocation: number;
    product: number;
  }>();

  stockLocations$: Observable<StockLocation[]>;
  products$: Observable<Product[]>;
  currentProduct: number = 0;
  currentStockLocation: number = 0;
  error = {
    stock: false,
    product: false,
    transactionType: false,
    quantity: false
  };

  constructor(private backendService: BackendService) {}

  ngOnInit() {
    this.products$ = this.backendService.getProducts();
    this.stockLocations$ = this.backendService.getStockLocations();
  }

  setCurrentProduct($event) {
    this.currentProduct = Number($event.target.value);
    this.getCurrentStorageStatus();
  }
  setCurrentStockLocation($event) {
    this.currentStockLocation = Number($event.target.value);
    this.getCurrentStorageStatus();
  }

  private getCurrentStorageStatus() {
    const product = this.currentProduct;
    const stockLocation = this.currentStockLocation;
    // console.log(product, stockLocation);

    if (product === 0 || stockLocation === 0) {
      return;
    }
    this.currentSelection.emit({
      stockLocation: stockLocation,
      product: product
    });
    // this.backendService.getCurrentStorageStatusForProducatAtLocation(
    //   stockLocation,
    //   product
    // );
  }

  submitTransaction(stockLocation, product, transactionType, quantity) {
    if (this.validation(stockLocation, product, transactionType, quantity)) {
      return;
    }
    const transaction: Transaction = {
      product: product,
      stockLocation: stockLocation,
      transactionType: transactionType,
      quantity: quantity
    };
    const response$ = this.backendService.sendTransaction(transaction);
    response$.subscribe(res => {
      if (res.code === 200) {
        this.transactionSuccess.emit(true);
      } else {
        this.transactionSuccess.emit(false);
      }
    });
  }

  validation(stockLocation, product, transactionType, quantity) {
    this.error.stock = stockLocation === "0";
    this.error.product = product === "0";
    this.error.transactionType = transactionType === "0";
    this.error.quantity = isNaN(Number(quantity));

    if (!this.error.quantity) {
      this.error.quantity = Number(quantity) <= 0;
    }

    for (const key in this.error) {
      if (this.error.hasOwnProperty(key)) {
        if (this.error[key]) {
          return true;
        }
      }
    }
    return false;
  }
}
