import { Injectable } from "@angular/core";
import { StockLocation } from "../models/StockLocation";
import { Product } from "../models/Product";
import { ProductStorageInfo } from "../models/ProductQuantityInfo";
import { of, Observable, throwError } from "rxjs";
import { Transaction } from "../models/transaction";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";

import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class BackendService {
  private API_URL = environment.API_URL;
  stockLocations: StockLocation[] = [
    {
      stock_nr: 1,
      city: "Norrköping"
    },
    {
      stock_nr: 2,
      city: "Frankfurt"
    },
    {
      stock_nr: 3,
      city: "Lund"
    }
  ];

  products: Product[] = [
    {
      id: 1,
      productNr: "P001",
      name: "jTelefon"
    },
    {
      id: 2,
      productNr: "P002",
      name: "jPlatta"
    },
    {
      id: 3,
      productNr: "P003",
      name: "Päronklocka"
    }
  ];

  productStorageInfo: ProductStorageInfo[] = [
    {
      product: this.products[0],
      storageData: [
        {
          stockLocation: this.stockLocations[0],
          quantity: 1003
        },
        {
          stockLocation: this.stockLocations[1],
          quantity: 700
        }
      ]
    },
    {
      product: this.products[1],
      storageData: [
        {
          stockLocation: this.stockLocations[2],
          quantity: 106
        },
        {
          stockLocation: this.stockLocations[0],
          quantity: 894
        }
      ]
    }
  ];

  constructor(private http: HttpClient) {}

  test() {
    console.log("Running test!");
  }

  getStockLocations(): Observable<StockLocation[]> {
    const api_route = this.API_URL + "/stocklocations";
    return this.http
      .get<StockLocation[]>(api_route)
      .pipe(catchError(this.handleError));
  }

  getProducts(): Observable<Product[]> {
    const api_route = this.API_URL + "/products";
    return this.http
      .get<Product[]>(api_route)
      .pipe(catchError(this.handleError));
  }

  getAllProductStorageInfo(): Observable<ProductStorageInfo[]> {
    const api_route = this.API_URL + "/allStorageInfo";
    return this.http
      .get<ProductStorageInfo[]>(api_route)
      .pipe(catchError(this.handleError))
    return of(this.productStorageInfo);
  }

  sendTransaction(transaction: Transaction) {
    // console.log(transaction);
    const api_route = this.API_URL + "/transactions";
    const options = { headers: { "Content-Type": "application/json" } };
    const data = {
      product_id: Number(transaction.product),
      stock_nr: Number(transaction.stockLocation),
      quantity: Number(transaction.quantity),
      inbound: Number(transaction.transactionType) === 1
    };
    // console.log(data);
    return this.http.post<any>(api_route, JSON.stringify(data), options);
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
