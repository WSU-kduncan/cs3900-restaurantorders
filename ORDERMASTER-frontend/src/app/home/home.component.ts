import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { Table } from '../models/table.model/table.model';
import { TableService } from '../services/table.service/table.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent
{
  tables: Table[] = [];
  
  SearchBarFocus = false;
  isActive = true;
}
