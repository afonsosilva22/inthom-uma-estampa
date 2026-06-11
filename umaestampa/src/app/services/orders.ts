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

  private initPromise: Promise<void> | null = null;

  // inicializa o storage e carrega as encomendas guardadas, garantindo que a inicialização só acontece uma vez
  init(): Promise<void> {
    if (!this.initPromise) {
      this.initPromise = this.doInit();
    }
    return this.initPromise;
  }

  // carrega as encomendas guardadas no storage usando o driver sqlite
  private async doInit() {
    await this.storage.defineDriver(CordovaSQLiteDriver);
    await this.storage.create();

    const orders = await this.storage.get('orders');

    if (orders) {
      this.orders = orders;
    }
  }

  // devolve todas as encomendas guardadas
  getOrders(): Order[] {
    return this.orders;
  }

  // procura uma encomenda pelo identificador e devolve-a, ou undefined se não existir
  getById(id: string): Order | undefined {
    return this.orders.find(o => o.id === id);
  }

  // adiciona uma nova encomenda ao storage e atualiza a lista de encomendas
  async insertOrder(order: Order): Promise<void> {
    if (!order.id) {
      order.id = Date.now().toString();
    }

    this.orders.push(order);
    await this.storage.set('orders', this.orders);
  }

  // atualiza uma encomenda existente com os dados fornecidos e guarda as alterações no storage
  async updateOrder(id: string, changes: Partial<Order>): Promise<void> {
    const order = this.orders.find(o => o.id === id);

    if (order) {
      Object.assign(order, changes);
      await this.storage.set('orders', this.orders);
    }
  }

  // remove uma encomenda do storage e atualiza a lista de encomendas
  async deleteOrder(id: string): Promise<void> {
    const index = this.orders.findIndex(o => o.id === id);

    if (index >= 0) {
      this.orders.splice(index, 1);
      await this.storage.set('orders', this.orders);
    }
  }
}