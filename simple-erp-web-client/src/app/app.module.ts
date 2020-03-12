import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StartMenuComponent } from './start-menu/start-menu.component';
import { ModuleCardComponent } from './start-menu/module-card/module-card.component';
import { TransactionModuleComponent } from './transaction-module/transaction-module.component';
import { StockQuantityModuleComponent } from './stock-quantity-module/stock-quantity-module.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StartMenuComponent,
    ModuleCardComponent,
    TransactionModuleComponent,
    StockQuantityModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
