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
          productName: 'T-Shirt Clássica',
          imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
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
          designId: '2',
          productName: 'Hoodie Premium',
          imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400',
          color: '#1a1a2e',
          size: 'L',
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
          designId: '3',
          productName: 'Tote Bag',
          imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=400',
          color: '#e8c49a',
          size: 'Único',
          quantity: 3,
          price: 18.50,
        },
        {
          designId: '7',
          productName: 'Boné Snapback',
          imageUrl: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400',
          color: '#e63946',
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
      totalAmount: 77.50,
      paymentMethod: 'Transferência bancária',
    },
    {
      id: 'ord-00000004',
      status: 'pending',
      orderDate: '2025-05-01',
      items: [
        {
          designId: '5',
          productName: 'Mochila Urban',
          imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
          color: '#000000',
          size: 'Único',
          quantity: 1,
          price: 59.90,
        }
      ],
      deliveryAddress: {
        street: 'Largo do Rossio, 12',
        postalCode: '1100-201',
        city: 'Lisboa',
        country: 'Portugal',
      },
      totalAmount: 59.90,
      paymentMethod: 'MB Way',
    },
    {
      id: 'ord-00000005',
      status: 'cancelled',
      orderDate: '2025-02-14',
      items: [
        {
          designId: '9',
          productName: 'Polo Bordado',
          imageUrl: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400',
          color: '#2d6a4f',
          size: 'M',
          quantity: 2,
          price: 36.00,
        }
      ],
      deliveryAddress: {
        street: 'Rua de Cedofeita, 200',
        postalCode: '4050-180',
        city: 'Porto',
        country: 'Portugal',
      },
      totalAmount: 72.00,
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
