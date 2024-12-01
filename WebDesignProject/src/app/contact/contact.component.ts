import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent
{
  backgroundColor: string = 'rgb(98, 128, 204)';
  buttonStyle()
  {
    this.backgroundColor = this.backgroundColor === 'rgb(98, 128, 204)' ? 'rgb(89, 119, 196)' : 'rgb(98, 128, 204)';
  }

  //TODO: animations for actually being clicked
}
