import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, NavigationEnd } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
  showBurger: boolean = false

  constructor(private router: Router ) { }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        // console.log(event);
        if (event.urlAfterRedirects === '/') {
          this.showBurger = false
        }else{
          this.showBurger = true
        }
        
      }
      // NavigationEnd
      // NavigationCancel
      // NavigationError
      // RoutesRecognized
    });
  }

}
