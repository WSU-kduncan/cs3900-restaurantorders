import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { OrderService } from './services/order.service/order.service';

// @NgModule decorator with its metadata
@NgModule({
  declarations: [],
  imports: [BrowserModule, HttpClientModule],
  providers: [OrderService],
  bootstrap: []
})
export class AppModule {}