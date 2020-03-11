import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { StartMenuComponent } from "./start-menu/start-menu.component";
import { TransactionModuleComponent } from "./transaction-module/transaction-module.component";

const routes: Routes = [
  {
    path: "transaction",
    component: TransactionModuleComponent
  },
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
