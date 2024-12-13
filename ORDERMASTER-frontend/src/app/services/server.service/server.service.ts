import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Server } from '../../models/server.model/server.model';
import { environment } from '../../enviornment';


@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private http: HttpClient) { }

  private apiUrl = `${environment.apiUrl}/servers`;
    
    getServers(): Observable<Server[]> {
      return this.http.get<Server[]>(this.apiUrl);
      
    }
  
    addServer(server: Server): Observable<Server> {
      return this.http.post<Server>(this.apiUrl, server);
    }
  
    updateServer(serverId: number, server: Server): Observable<Server> {
      return this.http.put<Server>(`${this.apiUrl}/${serverId}`, server);
    }    
  
    deleteServer(serverId: number): Observable<void> {
      return this.http.delete<void>(`${this.apiUrl}/${serverId}`);
    }
  }
