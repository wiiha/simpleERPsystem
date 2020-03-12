import { Component, OnInit } from "@angular/core";

interface moduleItem {
  text: string;
  route: string;
  icon: string;
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
      route: "stockQuantity",
      icon: "fa-table"
    },
    {
      text: "Registrera in-/ utleverans",
      route: "transaction",
      icon: "fa-truck"

    },
    {
      text: "Administrera system",
      route: "erpAdmin",
      icon: "fa-cog"
    }
  ];

  constructor() {}

  ngOnInit() {
    this.moduleItems.sort((a, b) => ("" + a.text).localeCompare(b.text)); // Added so that the list of menu items are sorted
  }
}
