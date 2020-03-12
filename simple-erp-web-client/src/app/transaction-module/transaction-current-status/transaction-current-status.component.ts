import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-transaction-current-status",
  templateUrl: "./transaction-current-status.component.html",
  styleUrls: ["./transaction-current-status.component.sass"]
})
export class TransactionCurrentStatusComponent implements OnInit {
  @Input() currentSelectionStatus: {
    city: string;
    product: string;
    quantity: number;
  };
  constructor() {}

  ngOnInit() {}
}
