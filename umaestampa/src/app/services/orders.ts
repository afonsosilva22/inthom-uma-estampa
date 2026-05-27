import { Injectable } from '@angular/core';

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

export interface OrderItem {
  designId: string;
  productName: string;
  imageUrl: string;
  color: string;
  size: string;
  quantity: number;
  price: number;
}

export interface DeliveryAddress {
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
  deliveryAddress: DeliveryAddress;
  totalAmount: number;
  paymentMethod: string;
}

@Injectable({
  providedIn: 'root',
})
export class Orders {

  private orders: Order[] = [
  {
    id: 'ord-00000001',
    status: 'delivered',
    orderDate: '2025-03-10',
    items: [
      {
        designId: '1',
        productName: 'T-Shirt',
        imageUrl: './assets/images/tshirt_white.png',
        color: '#ffffff',
        size: 'M',
        quantity: 2,
        price: 24.99,
      }
    ],
    deliveryAddress: {
      street: 'Rua de Santa Catarina, 123',
      postalCode: '4000-450',
      city: 'Porto',
      country: 'Portugal',
    },
    totalAmount: 49.98,
    paymentMethod: 'Cartão de crédito',
  },

  {
    id: 'ord-00000002',
    status: 'shipped',
    orderDate: '2025-04-02',
    items: [
      {
        designId: '7',
        productName: 'Hoodie',
        imageUrl: './assets/images/hoodie_blue.png',
        color: '#0000ff',
        size: 'M',
        quantity: 1,
        price: 49.99,
      }
    ],
    deliveryAddress: {
      street: 'Avenida da Liberdade, 456',
      postalCode: '1250-096',
      city: 'Lisboa',
      country: 'Portugal',
    },
    totalAmount: 49.99,
    paymentMethod: 'MB Way',
  },

  {
    id: 'ord-00000003',
    status: 'processing',
    orderDate: '2025-04-20',
    items: [
      {
        designId: '5',
        productName: 'Caneca',
        imageUrl: './assets/images/mug_blue.png',
        color: '#0000ff',
        size: 'Único',
        quantity: 3,
        price: 14.99,
      },
      {
        designId: '3',
        productName: 'Boné',
        imageUrl: './assets/images/cap_black.png',
        color: '#000000',
        size: 'Único',
        quantity: 1,
        price: 22.00,
      }
    ],
    deliveryAddress: {
      street: 'Rua do Almada, 78',
      postalCode: '4050-036',
      city: 'Porto',
      country: 'Portugal',
    },
    totalAmount: 66.97,
    paymentMethod: 'Transferência bancária',
  },

  {
    id: 'ord-00000004',
    status: 'pending',
    orderDate: '2025-05-01',
    items: [
      {
        designId: '9',
        productName: 'Caneca',
        imageUrl: './assets/images/mug_red.png',
        color: '#ff0000',
        size: 'Único',
        quantity: 2,
        price: 14.99,
      },
      {
        designId: '4',
        productName: 'Capa de Telemóvel',
        imageUrl: './assets/images/phone_case_red.png',
        color: '#ff0000',
        size: 'Único',
        quantity: 1,
        price: 18.50,
      }
    ],
    deliveryAddress: {
      street: 'Largo do Rossio, 12',
      postalCode: '1100-201',
      city: 'Lisboa',
      country: 'Portugal',
    },
    totalAmount: 48.48,
    paymentMethod: 'MB Way',
  },

  {
    id: 'ord-00000005',
    status: 'cancelled',
    orderDate: '2025-02-14',
    items: [
      {
        designId: '6',
        productName: 'T-Shirt',
        imageUrl: './assets/images/tshirt_white.png',
        color: '#ffffff',
        size: 'XL',
        quantity: 2,
        price: 24.99,
      },
      {
        designId: '10',
        productName: 'Boné',
        imageUrl: './assets/images/cap_black.png',
        color: '#000000',
        size: 'Único',
        quantity: 1,
        price: 22.00,
      }
    ],
    deliveryAddress: {
      street: 'Rua de Cedofeita, 200',
      postalCode: '4050-180',
      city: 'Porto',
      country: 'Portugal',
    },
    totalAmount: 71.98,
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
