import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuardService } from "./core/guards/auth-guard.service";
import { LoginComponent } from "./auth/login/login.component";
import { HomepageComponent } from "./home/homepage/homepage.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
  { path: "", component: HomepageComponent, pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "404", component: PageNotFoundComponent },
  {
    path: "explore",
    loadChildren: () =>
      import("../app/explore/explore.module").then((m) => m.ExploreModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
