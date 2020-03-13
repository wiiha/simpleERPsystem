import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { environment } from "../../environments/environment";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.sass"]
})
export class NavbarComponent implements OnInit {
  showBurger: boolean = false;
  production = false

  constructor(private router: Router) {}

  ngOnInit() {
    this.production = environment.production
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // console.log(event);
        if (event.urlAfterRedirects === "/") {
          this.showBurger = false;
        } else {
          this.showBurger = true;
        }
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }
}
