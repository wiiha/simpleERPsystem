import { Component, OnInit } from "@angular/core";
import { BackendService } from "../services/backend.service";
import { Observable, forkJoin, BehaviorSubject } from "rxjs";
import { switchMap } from "rxjs/operators";
import { TransactionResponse } from "../models/TransactionResponse";
import { ProductResponse } from "../models/ProductResponse";
import { StockLocation } from "../models/StockLocation";

@Component({
  selector: "app-stats-module",
  templateUrl: "./stats-module.component.html",
  styleUrls: ["./stats-module.component.sass"]
})
export class StatsModuleComponent implements OnInit {
  fetchingData = true;
  rows$: BehaviorSubject<any[]> = new BehaviorSubject(null);
  // transactions$: Observable<TransactionResponse[]>;
  // products$: Observable<ProductResponse[]>;
  // stockLocations$: Observable<StockLocation[]>;

  constructor(private backendService: BackendService) {}

  ngOnInit() {
    const transactions$ = this.backendService.getAllTransactions();
    const products$ = this.backendService.getProducts();
    const stockLocations$ = this.backendService.getStockLocations();
    forkJoin([transactions$, products$, stockLocations$]).subscribe(results => {
      // console.log(results);
      let rows = [];
      let lookupFirst = {};
      const transactions = results[0];
      const products = results[1];
      const stockLocations = results[2];
      transactions.forEach(transaction => {
        const pName = this.productLookUp(products, transaction.product_id);
        const slName = this.stockLocationLookUp(
          stockLocations,
          transaction.stock_nr
        );
        let initialTransaction = false;

        // These nested if's are used to identify the initial transaction for a given location. Can be refactored
        if (lookupFirst[pName] === undefined) {
          lookupFirst[pName] = {};
          lookupFirst[pName][slName] = true;
          initialTransaction = true;
        } else {
          if (lookupFirst[pName][slName] === undefined) {
            lookupFirst[pName][slName] = true;
            initialTransaction = true;
          } else {
            if (!lookupFirst[pName][slName]) {
              initialTransaction = true;
            }
          }
        }

        const outdata = {
          product: pName,
          stockLocation: slName,
          date: transaction.date,
          typeString: transaction.inbound ? "Inleverans" : "Utleverans",
          inbound: transaction.inbound,
          quantity: transaction.quantity,
          initialTransaction: initialTransaction,
          initialTransactionText: initialTransaction
            ? "Ingående lagersaldo"
            : ""
        };
        // console.log(outdata);
        rows.push(outdata);
      });
      // console.log(rows);
      this.rows$.next(rows);
      this.fetchingData = false;
    });
  }

  // This code should be refactored to not go through a for loop so many times. Not scaleable
  private productLookUp(products: ProductResponse[], id: number): string {
    // console.log(id);
    for (const product of products) {
      if (product.id === id) {
        return product.name;
      }
    }
    return "NOT FOUND";
  }
  private stockLocationLookUp(
    stockLocations: StockLocation[],
    id: number
  ): string {
    for (const stockLocation of stockLocations) {
      if (stockLocation.stock_nr === id) {
        return stockLocation.city;
      }
    }
    return "NOT FOUND";
  }
}
