import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
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
