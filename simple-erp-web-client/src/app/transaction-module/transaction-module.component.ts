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
  transactionSuccess = false;
  transactionFail = false;
  transactionResponseMsg = "";
  currentSelectionStatus: {
    city: string;
    product: string;
    quantity: number;
  } = { city: "", product: "", quantity: 0 };
  currentSelectionStatusIsSet = false;
  constructor(private backendService: BackendService) {}

  ngOnInit() {}

  newTransaction() {
    this.transactionSuccess = false;
    this.transactionFail = false;
    this.transactionResponseMsg = "";
  }

  transactionRespons(transactionSuccess: boolean) {
    if (transactionSuccess) {
      this.transactionSuccess = true;
      this.transactionResponseMsg = "Leverans registrerad!";
    } else {
      this.transactionFail = true;
      this.transactionResponseMsg =
        "Något gick fel. Leveransen registrerades inte.";
    }
  }

  getCurrentStorageStatus($event) {
    console.log($event);
    this.backendService
      .getCurrentStorageStatusForProducatAtLocation(
        $event.stockLocation,
        $event.product
      )
      .subscribe(res => {
        this.currentSelectionStatus.city = res.city;
        this.currentSelectionStatus.product = res.product;
        this.currentSelectionStatus.quantity = res.quantity;
        this.currentSelectionStatusIsSet = true;
      });
  }
}
