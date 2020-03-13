import { Injectable } from "@angular/core";
import { StockLocation } from "../models/StockLocation";
import { Product } from "../models/Product";
import { ProductStorageInfo } from "../models/ProductQuantityInfo";
import { of, Observable, throwError } from "rxjs";
import { Transaction } from "../models/Transaction";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { catchError } from "rxjs/operators";

import { environment } from "../../environments/environment";
import { TransactionResponse } from '../models/TransactionResponse';
import { ProductResponse } from '../models/ProductResponse';

@Injectable({
  providedIn: "root"
})
export class BackendService {
  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  test() {
    console.log("Running test!");
  }

  getCurrentStorageStatusForProducatAtLocation(
    stockLocation: number,
    product: number
  ) {
    // console.log(stockLocation,product);
    const api_route =
      this.API_URL +
      "/products/" +
      product.toString() +
      "/stocklocation/" +
      stockLocation.toString();
    // console.log(api_route);
    return this.http
      .get<{ city: string; product: string; quantity: number }>(api_route)
      .pipe(catchError(this.handleError));
  }

  getStockLocations(): Observable<StockLocation[]> {
    const api_route = this.API_URL + "/stocklocations";
    return this.http
      .get<StockLocation[]>(api_route)
      .pipe(catchError(this.handleError));
  }

  getAllTransactions(): Observable<TransactionResponse[]> {
    const api_route = this.API_URL + "/transactions";
    return this.http
      .get<TransactionResponse[]>(api_route)
      .pipe(catchError(this.handleError));
  }

  getProducts(): Observable<ProductResponse[]> {
    const api_route = this.API_URL + "/products";
    return this.http
      .get<ProductResponse[]>(api_route)
      .pipe(catchError(this.handleError));
  }

  getAllProductStorageInfo(): Observable<ProductStorageInfo[]> {
    const api_route = this.API_URL + "/allStorageInfo";
    return this.http
      .get<ProductStorageInfo[]>(api_route)
      .pipe(catchError(this.handleError));
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
