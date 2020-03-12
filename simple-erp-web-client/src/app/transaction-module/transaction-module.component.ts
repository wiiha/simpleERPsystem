import { Component, OnInit } from "@angular/core";
import { BackendService } from "../services/backend.service";
import { StockLocation } from "../models/StockLocation";
import { Observable } from "rxjs";
import { Product } from "../models/Product";
import { Transaction } from "../models/Transaction";

@Component({
  selector: "app-transaction-module",
  templateUrl: "./transaction-module.component.html",
  styleUrls: ["./transaction-module.component.sass"]
})
export class TransactionModuleComponent implements OnInit {
  stockLocations$: Observable<StockLocation[]>;
  products$: Observable<Product[]>;
  transactionSuccess = false;
  transactionFail = false;
  transactionResponseMsg = "";
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

  newTransaction() {
    this.transactionSuccess = false;
    this.transactionFail = false;
    this.transactionResponseMsg = "";
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
        this.transactionSuccess = true;
        this.transactionResponseMsg =
          (Number(transactionType) === 1 ? "In" : "Ut") +
          "leverans registrerad!";
      } else {
        this.transactionFail = true;
        this.transactionResponseMsg = "Något gick fel. Leveransen registrerades inte."
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
