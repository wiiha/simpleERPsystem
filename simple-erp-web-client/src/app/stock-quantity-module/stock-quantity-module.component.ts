import { Component, OnInit } from "@angular/core";
import { BackendService } from "../services/backend.service";
import { Subscription, BehaviorSubject } from "rxjs";

@Component({
  selector: "app-stock-quantity-module",
  templateUrl: "./stock-quantity-module.component.html",
  styleUrls: ["./stock-quantity-module.component.sass"]
})
export class StockQuantityModuleComponent implements OnInit {
  // ProductStorageInfo$: Observable<ProductStorageInfo[]>;
  rows$: BehaviorSubject<any[]> = new BehaviorSubject(null);
  ProductStorageInfoSub: Subscription;
  constructor(private backendService: BackendService) {}

  ngOnInit() {
    this.ProductStorageInfoSub = this.backendService
      .getAllProductStorageInfo()
      .subscribe(infoArray => {
        // This function is used to preprocess the data for the table. The data is then sent to the view via a BehaviorSubject (rows$)
        // console.log(infoArray);
        let outdata = [];
        infoArray.forEach(item => {
          // console.log(item);

          item.storageData.forEach(location => {
            // console.log(location);
            const row = {
              product: item.product,
              stockLocation: location.stockLocation,
              quantity: location.quantity
            };
            outdata.push(row);
          });
          outdata.sort((a, b) => ("" + a.text).localeCompare(b.text));
          this.rows$.next(outdata);
        });
      });
  }
}
