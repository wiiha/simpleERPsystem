import { Component, OnInit } from "@angular/core";
import { BackendService } from "../services/backend.service";
import { StockLocation } from "../models/StockLocation";
import { Observable } from "rxjs";
import { Product } from "../models/Product";

@Component({
  selector: "app-transaction-module",
  templateUrl: "./transaction-module.component.html",
  styleUrls: ["./transaction-module.component.sass"]
})
export class TransactionModuleComponent implements OnInit {
  stockLocations$: Observable<StockLocation[]>;
  products$: Observable<Product[]>;
  constructor(private backendService: BackendService) {}

  ngOnInit() {
    this.products$ = this.backendService.getProducts()
    this.stockLocations$ = this.backendService.getStockLocations();
  }
}
