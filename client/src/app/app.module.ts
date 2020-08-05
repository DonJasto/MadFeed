import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { CoreModule } from "./core/core.module";
import { AppRoutingModule } from "./app-routing.module";
/*import { AuthModule } from './auth/auth.module'; imports--AuthModule,*/
import { HomeModule } from "./home/home.module";

import { CookieService } from "ngx-cookie-service";
import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

import { environment } from "../environments/environment";
import { BottomNavbarComponent } from "./bottom-navbar/bottom-navbar.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { LoginComponent } from "./auth/login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavbarComponent,
    BottomNavbarComponent,
    LoginComponent,
  ],
  imports: [BrowserModule, CoreModule, AppRoutingModule, HomeModule],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
