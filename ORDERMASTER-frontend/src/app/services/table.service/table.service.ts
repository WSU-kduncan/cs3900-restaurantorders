import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Table } from '../../models/table.model/table.model';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) { }

  apiUrl;
  
  getTables(): Observable<Table[]> 
  {
    return this.http.get<Table[]>(this.apiUrl);
  }

  addTable(table: Table): Observable<Table>
  {
    return this.http.post<Table>(this.apiUrl, table);
  }

  updateTable(tableId: number, table: Table): Observable<Table>
  {
    return this.http.put<Table>(`${this.apiUrl}/${tableId}`, table);
  }

  deleteTable(tableId: number): Observable<void>
  {
    return this.http.delete<void>(`${this.apiUrl}/${tableId}`);
  }
}
