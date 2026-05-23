import { Component, OnInit } from '@angular/core';
import { Order, Orders, OrderStatus } from '../services/orders';

interface StatusConfig {
  icon: string;
  label: string;
  color: string;
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
  standalone: false,
})
export class OrdersPage implements OnInit {

  orders: Order[] = [];

  statusConfig: Record<OrderStatus, StatusConfig> = {
    pending:    { icon: 'time-outline',           label: 'Pendente',      color: 'warning' },
    processing: { icon: 'cube-outline',            label: 'A processar',   color: 'primary' },
    shipped:    { icon: 'car-outline',             label: 'Enviada',       color: 'tertiary' },
    delivered:  { icon: 'checkmark-circle-outline',label: 'Entregue',      color: 'success' },
    cancelled:  { icon: 'close-circle-outline',    label: 'Cancelada',     color: 'danger' },
  };

  constructor(
    private orderService: Orders
  ) { }

  ngOnInit() {
    this.orders = this.orderService.getOrders();
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-PT', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  formatId(id: string): string {
    return id.slice(-8).toUpperCase();
  }

  getItemTotal(price: number, quantity: number): string {
    return (price * quantity).toFixed(2);
  }
}
