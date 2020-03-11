import { Component, OnInit } from "@angular/core";

interface stockLocation {
  stockNumber: number;
  city: string;
}

interface product {
  id: number;
  productNr: string;
  name: string;
}

@Component({
  selector: "app-transaction-module",
  templateUrl: "./transaction-module.component.html",
  styleUrls: ["./transaction-module.component.sass"]
})
export class TransactionModuleComponent implements OnInit {
  stockLocations: stockLocation[] = [
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

  products: product[] = [
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
    },
  ];

  constructor() {}

  ngOnInit() {}
}
