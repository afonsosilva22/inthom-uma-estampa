import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

export interface OrderItem {
  designId: string;
  quantity: number;
}

export interface Address {
  street: string;
  postalCode: string;
  city: string;
  country: string;
}

export interface Order {
  id: string;
  status: OrderStatus;
  orderDate: string;
  items: OrderItem[];
  deliveryAddress: Address;
  paymentMethod: string;
}

@Injectable({
  providedIn: 'root',
})
export class Orders {

  private orders: Order[] = [];

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    await this.storage.defineDriver(CordovaSQLiteDriver);
    await this.storage.create();
    const orders = await this.storage.get('orders');
    if (orders) {
      this.orders = orders;
    }
  }

  getOrders(): Order[] {
    return this.orders;
  }

  getById(id: string): Order | undefined {
    return this.orders.find(o => o.id === id);
  }

  async insertOrder(order: Order): Promise<void> {
    if (!order.id) {
      order.id = Date.now().toString();
    }
    this.orders.push(order);
    await this.storage.set('orders', this.orders);
  }

  async updateOrder(id: string, changes: Partial<Order>): Promise<void> {
    const order = this.orders.find(o => o.id === id);
    if (order) {
      Object.assign(order, changes);
      await this.storage.set('orders', this.orders);
    }
  }

  async deleteOrder(id: string): Promise<void> {
    const index = this.orders.findIndex(o => o.id === id);
    if (index >= 0) {
      this.orders.splice(index, 1);
      await this.storage.set('orders', this.orders);
    }
  }
}