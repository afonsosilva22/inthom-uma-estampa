import { Injectable } from '@angular/core';

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

  private orders: Order[] = [
  {
    id: '001',
    status: 'delivered',
    orderDate: '2025-03-10',
    items: [
      {
        designId: 'design-1',
        quantity: 2,
      }
    ],
    deliveryAddress: {
      street: 'Rua de Santa Catarina, 123',
      postalCode: '4000-450',
      city: 'Porto',
      country: 'Portugal',
    },
    paymentMethod: 'Cartão de crédito',
  },

  {
    id: '002',
    status: 'shipped',
    orderDate: '2025-04-02',
    items: [
      {
        designId: 'design-3',
        quantity: 1,
      }
    ],
    deliveryAddress: {
      street: 'Avenida da Liberdade, 456',
      postalCode: '1250-096',
      city: 'Lisboa',
      country: 'Portugal',
    },
    paymentMethod: 'MB Way',
  },

  {
    id: '003',
    status: 'processing',
    orderDate: '2025-04-20',
    items: [
      {
        designId: 'design-5',
        quantity: 3,
      },
      {
        designId: 'design-3',
        quantity: 1,
      }
    ],
    deliveryAddress: {
      street: 'Rua do Almada, 78',
      postalCode: '4050-036',
      city: 'Porto',
      country: 'Portugal',
    },
    paymentMethod: 'Transferência bancária',
  },

  {
    id: '005',
    status: 'cancelled',
    orderDate: '2025-02-14',
    items: [
      {
        designId: 'design-9',
        quantity: 2,
      },
      {
        designId: 'design-4',
        quantity: 1,
      }
    ],
    deliveryAddress: {
      street: 'Largo do Rossio, 12',
      postalCode: '1100-201',
      city: 'Lisboa',
      country: 'Portugal',
    },
    paymentMethod: 'MB Way',
  },

  {
    id: '006',
    status: 'cancelled',
    orderDate: '2025-02-14',
    items: [
      {
        designId: 'design-6',
        quantity: 2,
      },
      {
        designId: 'design-10',
        quantity: 1,
      }
    ],
    deliveryAddress: {
      street: 'Rua de Cedofeita, 200',
      postalCode: '4050-180',
      city: 'Porto',
      country: 'Portugal',
    },
    paymentMethod: 'Cartão de crédito',
  },
  ];

  getOrders(): Order[] {
    return this.orders;
  }

  getById(id: string): Order | undefined {
    return this.orders.find(o => o.id === id);
  }
}
