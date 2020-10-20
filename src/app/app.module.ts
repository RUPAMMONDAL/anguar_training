import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemcomponentComponent } from './itemcomponent/itemcomponent.component';
import { OrdercomponentComponent } from './ordercomponent/ordercomponent.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemcomponentComponent,
    OrdercomponentComponent,
    NavbarComponent,
    ErrorpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
