import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule} from '@angular/router';
import { OrderService } from '../services/order.service/order.service';
import { Order } from '../models/order.model/order.model';
import { forwardRef } from "@angular/core";
import { Server } from '../models/server.model/server.model';

@Component({
  selector: 'app-orderlist',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers: [OrderService],
  styleUrl: './orderlist.component.css',
  templateUrl:'./orderlist.component.html'
})
export class OrderlistComponent implements OnInit
{
  orders: Order[] =     [
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
    {orderId: 20, tableId: 12, serverId: 6, date: "12/5/2024", timeOrdered:'14:08', timeCompleted:'',      status:'In Progress'},
    {orderId: 21, tableId: 13, serverId: 5, date: "12/5/2024", timeOrdered:'14:08', timeCompleted:'',      status:'In Progress'},
    {orderId: 22, tableId: 3,  serverId: 1, date: "12/5/2024", timeOrdered:'14:09', timeCompleted:'',      status:'In Progress'},
    {orderId: 23, tableId: 14, serverId: 2, date: "12/5/2024", timeOrdered:'14:12', timeCompleted:'',      status:'In Progress'},
  ];

  servers: Server[] =
  [
    {serverId: 1, firstName: 'Adam', lastName: 'Prou', availability: 'Available'},
    {serverId: 2, firstName: 'David', lastName: 'Greenblatt', availability: 'Available'},
    {serverId: 3, firstName: 'Jaiden', lastName: 'Day', availability: 'Not Available'},
    {serverId: 4, firstName: 'Jordan', lastName: 'Wade', availability: 'Not Available'},
    {serverId: 5, firstName: 'Sam', lastName: 'Rivers', availability: 'Available'},
    {serverId: 6, firstName: 'Austin', lastName: 'Rivers', availability: 'Available'},
    {serverId: 7, firstName: 'Davina', lastName: 'Sherbet', availability: 'Not Available'}
  ]

  tabState:string = "overview";
  server: Server = {serverId: 0, firstName: '', lastName: '', availability: ''};
  selectedOrder: Order | null = null;
  newOrder: Order = {orderId: 0,  tableId: 0,  serverId: 0, date: "12/31/1969", timeOrdered:'', timeCompleted: '', status:''}
  constructor(private route: ActivatedRoute, private router: Router, 
    //private orderService: OrderService  TODO: this is the exact line that leads to this page breaking and is why I can't get dynamic services working as a source. figure out why this is breaking the page! 
  ){
  }
  ngOnInit(): void 
  {
    this.loadOrders();
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      if (id) {
        this.selectOrder(id);
      }
    });
  }
  loadOrders(): void {
    //this.orders = this.orderService.getOrders(); TODO: once the above issue is fixed, uncomment this too
  }

  selectOrder(id): void {
    this.selectedOrder = this.orders[id - 1];
  }
  goToOrderId(id): void 
  {
    this.router.navigate(['/orders', id]);
  }

  getServerName(serverId)
  {
    this.server = this.servers[serverId - 1]
    return this.server.firstName + " " + this.server.lastName;
  }

  changeTab(clickedTab)
  {
    this.tabState = clickedTab;
  }


} 
