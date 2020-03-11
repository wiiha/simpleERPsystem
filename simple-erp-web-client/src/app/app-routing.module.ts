import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { StartMenuComponent } from "./start-menu/start-menu.component";

const routes: Routes = [
  // {
  //   path: "/",
  //   component: LoginComponent,
  //   data: { authGuardPipe: redirectLoggedInToHome }
  // },
  {
    path: "",
    component: StartMenuComponent,
    pathMatch: "full" //,
    // canActivate: [UserLoggedInGuard,UserVerifiedGuard]
  },
  {
    path: "**",
    redirectTo: "/"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
