import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { StartMenuComponent } from './start-menu/start-menu.component';
import { ModuleCardComponent } from './start-menu/module-card/module-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    StartMenuComponent,
    ModuleCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
