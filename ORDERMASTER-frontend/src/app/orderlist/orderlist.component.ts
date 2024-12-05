import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { ActivatedRoute, Router, RouterModule} from '@angular/router';
import { OrderService } from '../services/order.service/order.service';
import { Order } from '../models/order.model/order.model';
import { forwardRef } from "@angular/core";

@Component({
  selector: 'app-orderlist',
  standalone: true,
  imports: [CommonModule, RouterModule],
  styleUrl: './orderlist.component.css',
  template:`
  <table class="orders" style="width:90vw;">
    <tr>
        <th>Order ID</th>
        <th>Table #</th>
        <th>Assigned Server</th>
        <th>Time Ordered</th>
        <th>Status</th>
      </tr>
      <!-- cool for-loop to dynamically generate orders -->
      <tr (click)="goToOrderId(order.orderId)" *ngFor="let order of orders">
        <td>{{order.orderId}}</td>
        <td>{{order.tableId}}</td>
        <td>{{order.serverId}}</td>
        <td>{{order.timeOrdered}}</td>
        <td>{{order.status}}</td>
    </tr>
  </table>
`
})
export class OrderlistComponent implements OnInit
{

  orders: Order[] = [];
  constructor(private route: ActivatedRoute, private router: Router)
  {
  }
  ngOnInit(): void 
  {
    this.orders = 
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
  }
  goToOrderId(id): void 
  {
    this.router.navigate(['/orders', id]);
  }
} 
