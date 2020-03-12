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
}
