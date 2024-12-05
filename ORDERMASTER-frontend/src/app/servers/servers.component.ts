import { Component } from '@angular/core';
import { ServerService } from '../services/server.service/server.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css'
})
export class ServersComponent {
  Servers: any[] = [];

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.serverService.getServers().subscribe(data => {
      this.Servers = data;
    });

  }
}
