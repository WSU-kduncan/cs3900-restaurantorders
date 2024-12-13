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
    {orderId: 1,  tableId: 1,  serverId: 1, date: "12/5/2024", timeOrdered:'13:32', timeCompleted:'13:49', status:'Completed'  },
    {orderId: 2,  tableId: 2,  serverId: 2, date: "12/5/2024", timeOrdered:'13:35', timeCompleted:'13:52', status:'Completed'  },
    {orderId: 3,  tableId: 3,  serverId: 5, date: "12/5/2024", timeOrdered:'13:37', timeCompleted:'13:50', status:'Completed'  },
    {orderId: 4,  tableId: 4,  serverId: 6, date: "12/5/2024", timeOrdered:'13:40', timeCompleted:'',      status:'In Progress'},
    {orderId: 5,  tableId: 5,  serverId: 5, date: "12/5/2024", timeOrdered:'13:40', timeCompleted:'13:54', status:'Completed'  },
    {orderId: 6,  tableId: 6,  serverId: 1, date: "12/5/2024", timeOrdered:'13:43', timeCompleted:'13:58', status:'Completed'  },
    {orderId: 7,  tableId: 7,  serverId: 2, date: "12/5/2024", timeOrdered:'13:44', timeCompleted:'',      status:'In Progress'},
    {orderId: 8,  tableId: 8,  serverId: 5, date: "12/5/2024", timeOrdered:'13:44', timeCompleted:'14:02', status:'Completed'  },
    {orderId: 9,  tableId: 9,  serverId: 5, date: "12/5/2024", timeOrdered:'13:48', timeCompleted:'',      status:'In Progress'},
    {orderId: 10, tableId: 1,  serverId: 2, date: "12/5/2024", timeOrdered:'13:49', timeCompleted:'14:03', status:'Completed'  },
    {orderId: 11, tableId: 3,  serverId: 6, date: "12/5/2024", timeOrdered:'13:50', timeCompleted:'13:49', status:'Completed ' },
    {orderId: 12, tableId: 2,  serverId: 1, date: "12/5/2024", timeOrdered:'13:52', timeCompleted:'',      status:'In Progress'},
    {orderId: 13, tableId: 5,  serverId: 6, date: "12/5/2024", timeOrdered:'13:56', timeCompleted:'',      status:'In Progress'},
    {orderId: 14, tableId: 10, serverId: 2, date: "12/5/2024", timeOrdered:'13:56', timeCompleted:'',      status:'In Progress'},
    {orderId: 15, tableId: 11, serverId: 5, date: "12/5/2024", timeOrdered:'13:59', timeCompleted:'',      status:'In Progress'},
    {orderId: 16, tableId: 6,  serverId: 6, date: "12/5/2024", timeOrdered:'14:00', timeCompleted:'',      status:'In Progress'},
    {orderId: 17, tableId: 8,  serverId: 6, date: "12/5/2024", timeOrdered:'14:02', timeCompleted:'',      status:'In Progress'},
    {orderId: 18, tableId: 11, serverId: 2, date: "12/5/2024", timeOrdered:'14:04', timeCompleted:'',      status:'In Progress'},
    {orderId: 19, tableId: 1,  serverId: 1, date: "12/5/2024", timeOrdered:'14:05', timeCompleted:'',      status:'In Progress'},
    {orderId: 18, tableId: 12, serverId: 6, date: "12/5/2024", timeOrdered:'14:08', timeCompleted:'',      status:'In Progress'},
    {orderId: 18, tableId: 13, serverId: 5, date: "12/5/2024", timeOrdered:'14:08', timeCompleted:'',      status:'In Progress'},
    {orderId: 18, tableId: 3,  serverId: 1, date: "12/5/2024", timeOrdered:'14:09', timeCompleted:'',      status:'In Progress'},
    {orderId: 18, tableId: 14, serverId: 2, date: "12/5/2024", timeOrdered:'14:12', timeCompleted:'',      status:'In Progress'},
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
