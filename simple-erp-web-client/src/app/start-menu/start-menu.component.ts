import { Component, OnInit } from "@angular/core";

interface moduleItem {
  text: string;
  route: string;
}

@Component({
  selector: "app-start-menu",
  templateUrl: "./start-menu.component.html",
  styleUrls: ["./start-menu.component.sass"]
})
export class StartMenuComponent implements OnInit {
  moduleItems: moduleItem[] = [
    {
      text: "Lagersaldon",
      route: "stockQuantity"
    },
    {
      text: "Registrera in-/ utleverans",
      route: "transaction"
    },
    {
      text: "Administrera system",
      route: "erpAdmin"
    }
  ];

  constructor() {}

  ngOnInit() {
    this.moduleItems.sort((a, b) => ("" + a.text).localeCompare(b.text)); // Added so that the list of menu items are sorted
  }
}
