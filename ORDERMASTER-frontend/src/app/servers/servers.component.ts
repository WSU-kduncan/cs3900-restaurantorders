import { Component } from '@angular/core';
import { ServerService } from '../services/server.service/server.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-servers',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  Servers: any[] = [];
  newServer = { serverId: 0, firstName: '', lastName: '', availability: '' };
  editingServer: any = null;
  showAddServerForm = false;
  filterTerm: string = '';
  filterId: number | null = null;

  constructor(private serverService: ServerService) {}

  ngOnInit() {
    this.serverService.getServers().subscribe(servers => {
      this.Servers = servers;
    });
  }

  addServer() {
    if (this.newServer.firstName && this.newServer.lastName && this.newServer.availability) {
      this.serverService.addServer(this.newServer).subscribe((server) => {
        this.Servers.push(server);
        this.resetForm();
      });
    }
  }

  editServer(server: any) {
    this.editingServer = { ...server };
    this.showAddServerForm = false;
  }

  updateServer() {
    if (this.editingServer) {
      this.serverService.updateServer(this.editingServer.serverId, this.editingServer).subscribe(
        updatedServer => {
          const index = this.Servers.findIndex(s => s.serverId === updatedServer.serverId);
          if (index !== -1) {
            this.Servers[index] = updatedServer;
          }
          this.editingServer = null;
          this.resetForm();
        },
        error => {
          console.error("Error updating server: ", error);
        }
      );
    }
  }

  deleteServer(serverId: number) {
    this.serverService.deleteServer(serverId).subscribe(() => {
      this.Servers = this.Servers.filter(server => server.serverId !== serverId);
    });
  }

  resetForm() {
    this.newServer = { serverId: 0, firstName: '', lastName: '', availability: '' };
    this.filterId = null; 
    this.showAddServerForm = false;
  }

  toggleAddServerForm() {
    this.showAddServerForm = !this.showAddServerForm;
    this.editingServer = null;
  }

  filteredServers() {
    return this.Servers.filter(server => {
      const matchesId = this.filterId ? server.serverId === this.filterId : true;
      const matchesFilterTerm = this.filterTerm ?
        server.firstName.toLowerCase().includes(this.filterTerm.toLowerCase()) ||
        server.lastName.toLowerCase().includes(this.filterTerm.toLowerCase()) ||
        server.availability.toLowerCase().includes(this.filterTerm.toLowerCase()) : true;

      return matchesId && matchesFilterTerm;
    });
  }
}