import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    console.log('Form submitted:', this.contact);
    alert('New Order has been placed');
    this.contact = { name: '', email: '', message: '' };
  }
}
