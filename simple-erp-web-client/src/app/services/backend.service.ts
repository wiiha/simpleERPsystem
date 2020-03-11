import { Injectable } from "@angular/core";
import { StockLocation } from "../models/StockLocation";
import { Product } from "../models/Product";
import { ProductStorageInfo } from "../models/ProductQuantityInfo";
import { of, Observable } from "rxjs";
import { Transaction } from "../models/transaction";

@Injectable({
  providedIn: "root"
})
export class BackendService {
  stockLocations: StockLocation[] = [
    {
      stockNumber: 1,
      city: "Norrköping"
    },
    {
      stockNumber: 2,
      city: "Frankfurt"
    },
    {
      stockNumber: 3,
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

  constructor() {}

  test() {
    console.log("Running test!");
  }

  getStockLocations(): Observable<StockLocation[]> {
    return of(this.stockLocations);
  }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }

  getAllProductStorageInfo(): Observable<ProductStorageInfo[]> {
    return of(this.productStorageInfo);
  }

  sendTransaction(transaction: Transaction) {
    console.log(transaction);
  }
}
