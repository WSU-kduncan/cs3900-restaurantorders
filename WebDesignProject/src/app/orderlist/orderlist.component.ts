import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { ActivatedRoute, Router, RouterModule} from '@angular/router';
import { OrderService } from '../services/order.service/order.service';
import { Order } from '../models/order.model/order.model';
import { forwardRef } from "@angular/core";

const Orders = [
  {orderId: 1,  tableId: 1,  serverId: 1, date: new Date(), timeOrdered: new Date(), timeCompleted: new Date(), status:'Completed', specialInstructions:""},
  {orderId: 2,  tableId: 2,  serverId: 2, date: 32, timeOrdered: 32, timeCompleted: 32,  status:'Completed', specialInstructions:""},
  {orderId: 3,  tableId: 3,  serverId: 3, date: 32, timeOrdered: 32, timeCompleted: 32,  status:'Completed', specialInstructions:""},
  {orderId: 4,  tableId: 4,  serverId: 4, date: 32, timeOrdered: 32, timeCompleted: 32,  status:'In Progress', specialInstructions:""},

];

@Component({
  selector: 'app-orderlist',
  standalone: true,
  imports: [CommonModule, RouterModule, forwardRef(() => Orderlist)],
  templateUrl: './orderlist.component.html',
  styleUrl: './orderlist.component.css'
})
export class OrderlistComponent
{
  public date: Date = new Date();
}

@Component({
  selector:'orders',
  standalone: true,
  imports: [CommonModule, NgFor],
  styleUrl: './orderlist.component.css',
  template: `
  <table class="orders" style="width:90vw;">
    <tr>
        <th>Order ID</th>
        <th>Table #</th>
        <th>Assigned Server</th>
        <th>Time Ordered</th>
        <th>Status</th>
      </tr>
      <!-- cool for-loop to dynamically generate orders -->
      <tr (click)="goToOrderId(i + 1)" *ngFor="let order of orders; let i = index">
        <!-- adds one to it because the values start off 0-indexed -->
        <td>{{i + 1}}</td>
        <td>{{order.tableId}}</td>
        <td>{{order.serverId}}</td>
        <!-- time is calculated based on current user time for now. -->
        <td>{{calculateDummyTime(order.timeOrdered) | date:'HH:mm' }}</td>
        <td>{{order.status}}</td>
    </tr>
  </table>
`
})
export class Orderlist implements OnInit
{
  id: string | null = '';
  orders = Orders;
  date: Date = new Date();
  dummyTime: Date = new Date();

  constructor(private route: ActivatedRoute, private router: Router, private orderService: OrderService)
  {
    setInterval(() => {
    this.date = new Date()
    })
  }

  ngOnInit(): void
  {
    this.route.params
    .subscribe( ({id}) =>
    {
       this.id = id;
    })  
    this.orderService.getOrders().subscribe(orders => {
      this.orders = orders;
    });
  }

  goToOrderId(id): void 
  {
    this.router.navigate(['/orders', id]);
  }
  calculateDummyTime(offset): Date
  {
    // spent way too much time on this but i think its cool
    this.date = new Date();
    this.dummyTime = this.date;
    this.dummyTime.setMinutes(this.dummyTime.getMinutes() - offset);
    return this.dummyTime;

  }
} 
