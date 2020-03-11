import { Component, OnInit } from "@angular/core";

interface stockLocation {
  stockNumber: number;
  city: string;
}

@Component({
  selector: "app-transaction-module",
  templateUrl: "./transaction-module.component.html",
  styleUrls: ["./transaction-module.component.sass"]
})
export class TransactionModuleComponent implements OnInit {

  stockLocations : stockLocation[]=[
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
  ]

  constructor() {}

  ngOnInit() {}
}
