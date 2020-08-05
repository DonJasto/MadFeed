import { Component, OnInit, AfterViewInit } from "@angular/core";
import { AuthService } from "./core/services/auth/auth.service";

import {
  Router,
  NavigationStart,
  NavigationCancel,
  NavigationEnd,
} from "@angular/router";

@Component({
  selector: "ia-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, AfterViewInit {
  loading = true;
  isUserLoggedIn = true; //FALSE ORIGINA FALI TOKEN
  // tslint:disable-next-line: max-line-length
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.authService.isLoggedIn.subscribe((loginStatus: any) => {
      this.isUserLoggedIn = loginStatus;
    });
  }

  ngAfterViewInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      }

      if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
        this.loading = false;
      }
    });
  }
}
