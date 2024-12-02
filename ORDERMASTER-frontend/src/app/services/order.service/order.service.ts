import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../../models/order.model/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService 
{

  constructor(private http: HttpClient) { }

  apiUrl;
  
  getOrders(): Observable<Order[]> 
  {
    return this.http.get<Order[]>(this.apiUrl);
  }

  addOrder(order: Order): Observable<Order>
  {
    return this.http.post<Order>(this.apiUrl, order);
  }

  updateOrder(orderId: number, order: Order): Observable<Order>
  {
    return this.http.put<Order>(`${this.apiUrl}/${orderId}`, order);
  }

  deleteOrder(orderId: number): Observable<void>
  {
    return this.http.delete<void>(`${this.apiUrl}/${orderId}`);
  }
}
