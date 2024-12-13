import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent 
{
  backgroundColor: string = 'rgb(98, 128, 204)';
  width: string = '';
  // search bar is hovered over
  
  toggleSearchBar()
  {
    this.width = this.width === 'auto' ? '50vw' : 'auto';
  }
  navButtonStyle()
  {
    this.backgroundColor = this.backgroundColor === 'rgb(98, 128, 204)' ? 'rgb(89, 119, 196)' : 'rgb(98, 128, 204)';
  }

  toggleBackground(event: MouseEvent): void {
    const element = event.target as HTMLElement;
    const currentColor = getComputedStyle(element).backgroundColor;

    element.style.backgroundColor =
      currentColor === 'rgb(98, 128, 204)' ? 'rgb(89, 119, 196)' : 'rgb(98, 128, 204)';
  }
  //TODO: animations for actually being clicked
}
