import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrderService } from './services/order.service/order.service';

// @NgModule decorator with its metadata
@NgModule({
  declarations: [],
  imports: [BrowserModule],
  providers: [OrderService],
  bootstrap: []
})
export class AppModule {}