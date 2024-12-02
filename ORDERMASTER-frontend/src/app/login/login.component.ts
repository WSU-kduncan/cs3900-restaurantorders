import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  backgroundColor: string = 'rgb(107, 141, 228)';
  buttonStyle()
  {
    this.backgroundColor = this.backgroundColor === 'rgb(107, 141, 228)' ? 'rgb(89, 119, 196)' : 'rgb(107, 141, 228)';
  }
}
