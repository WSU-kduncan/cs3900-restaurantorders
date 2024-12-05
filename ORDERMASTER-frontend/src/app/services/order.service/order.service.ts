import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../../models/order.model/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService 
{

  private orders: Order[] = 
    [
        {orderId: 1,  tableId: 1,  serverId: 1, timeOrdered:'32', status:'Completed'  },
        {orderId: 2,  tableId: 2,  serverId: 2, timeOrdered:'29', status:'Completed'  },
        {orderId: 3,  tableId: 3,  serverId: 3, timeOrdered:'28', status:'Completed'  },
        {orderId: 4,  tableId: 4,  serverId: 4, timeOrdered:'25', status:'In Progress'},
        {orderId: 5,  tableId: 5,  serverId: 3, timeOrdered:'25', status:'Completed'  },
        {orderId: 6,  tableId: 6,  serverId: 1, timeOrdered:'22', status:'Completed'  },
        {orderId: 7,  tableId: 7,  serverId: 2, timeOrdered:'21', status:'In Progress'},
        {orderId: 8,  tableId: 8,  serverId: 3, timeOrdered:'21', status:'Completed'  },
        {orderId: 9,  tableId: 9,  serverId: 3, timeOrdered:'19', status:'In Progress'},
        {orderId: 10, tableId: 1,  serverId: 2, timeOrdered:'18', status:'Completed'  },
        {orderId: 11, tableId: 3,  serverId: 4, timeOrdered:'17', status:'In Progress'},
        {orderId: 12, tableId: 2,  serverId: 1, timeOrdered:'15', status:'In Progress'},
        {orderId: 13, tableId: 5,  serverId: 4, timeOrdered:'11', status:'In Progress'},
        {orderId: 14, tableId: 10, serverId: 2, timeOrdered:'11', status:'In Progress'},
        {orderId: 15, tableId: 11, serverId: 3, timeOrdered:'8',  status:'In Progress'},
        {orderId: 16, tableId: 6,  serverId: 4, timeOrdered:'7',  status:'In Progress'},
        {orderId: 17, tableId: 8,  serverId: 4, timeOrdered:'5',  status:'In Progress'},
        {orderId: 18, tableId: 11, serverId: 2, timeOrdered:'2',  status:'In Progress'}
      ];
  constructor(private http: HttpClient) { }

  apiUrl;
  
  //HTTP Call commands
  // getOrders(): Observable<Order[]> 
  // {
  //   return this.http.get<Order[]>(this.apiUrl);
  // }

  // addOrder(order: Order): Observable<Order[]>
  // {
  //   return this.http.post<Order[]>(this.apiUrl, order);
  // }

  // updateOrder(orderId: number, order: Order): Observable<Order[]>
  // {
  //   return this.http.put<Order[]>(`${this.apiUrl}/${orderId}`, order);
  // }

  // deleteOrder(orderId: number): Observable<void>
  // {
  //   return this.http.delete<void>(`${this.apiUrl}/${orderId}`);
  // }
  getOrders(): Order[]
  {
    return this.orders
  }

  getOrderById(id: number): Order | undefined
  {
    return this.orders.find((order) => order.orderId === id)
  }

  addOrder(order: Order): void
  {
    this.orders.push(order);
  }
  updateOrder(orderId: number, newOrder: Order): void
  {
    const index = this.orders.findIndex((order) => order.orderId === newOrder.orderId)
    if (index !== -1)
    {
      this.orders[index] = newOrder;
    }
  }

  deleteOrder(orderId: number): void
  {
    this.orders = this.orders.filter((order) => order.orderId !== orderId)
  }
}
