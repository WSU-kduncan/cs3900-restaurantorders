import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "./navbar/navbar.component";
import { RouterOutlet, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterOutlet, RouterLink, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent 
{
  title = 'OrderMaster';
  routerLink = "/"
  private date: Date = new Date();
  constructor() 
  {
     setInterval(() => {
       this.date = new Date()
     }, 1000)
  }
  getDate(): Date
  {
    return this.date;
  }
}
