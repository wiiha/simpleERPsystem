import { Injectable } from "@angular/core";
import { StockLocation } from "../models/StockLocation";
import { Product } from "../models/Product";
import { of, Observable } from "rxjs";

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
  constructor() {}

  test(){
    console.log("Running test!");
    
  }

  getStockLocations(): Observable<StockLocation[]> {
    return of(this.stockLocations);
  }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
