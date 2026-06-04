import { Component } from '@angular/core';
import { Order, Orders, OrderStatus } from '../services/orders';
import { Design, Designs } from '../services/designs';
import { Product, ProductVariant, Products } from '../services/products';

interface StatusConfig {
  icon: string;
  label: string;
  color: string;
}

// Versão enriquecida de um item para o display
export interface OrderItemDisplay {
  design: Design;
  product: Product;
  variant: ProductVariant;
  quantity: number;
}

// Versão enriquecida de uma encomenda para o display
export interface OrderDisplay {
  order: Order;
  items: OrderItemDisplay[];
  totalAmount: number;
}

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
  standalone: false,
})
export class OrdersPage {

  displayOrders: OrderDisplay[] = [];

  statusConfig: Record<OrderStatus, StatusConfig> = {
    pending:    { icon: 'time-outline',            label: 'Pendente',    color: 'warning' },
    processing: { icon: 'cube-outline',            label: 'A processar', color: 'primary' },
    shipped:    { icon: 'car-outline',             label: 'Enviada',     color: 'tertiary' },
    delivered:  { icon: 'checkmark-circle-outline',label: 'Entregue',    color: 'success' },
    cancelled:  { icon: 'close-circle-outline',    label: 'Cancelada',   color: 'danger' },
  };

  constructor(
    private orderService: Orders,
    private designService: Designs,
    private productService: Products
  ) {}

  async ionViewWillEnter() {
    await this.productService.init();
    await this.designService.init();
    await this.orderService.init();
    this.loadOrders();
  }

  loadOrders() {
    const orders = this.orderService.getOrders();

    this.displayOrders = orders
      .map(order => {
        // Para cada item da encomenda, vai buscar design, produto e variante
        const items: OrderItemDisplay[] = order.items
          .map(item => {
            const design = this.designService.getById(item.designId);
            const product = design ? this.productService.getById(design.productId) : null;
            const variant = product?.variants.find(v => v.id === design?.variantId);
            if (!design || !product || !variant) return null;
            return { design, product, variant, quantity: item.quantity };
          })
          .filter(i => i !== null) as OrderItemDisplay[];

        // Calcula o total somando preço base de cada item * quantidade
        const totalAmount = items.reduce((sum, item) => {
          let price = item.product.basePrice;
          if (item.design.size === 'XL') price += 2;
          return sum + (price * item.quantity);
        }, 0);

        return { order, items, totalAmount };
      });
  }

  getItemPrice(item: OrderItemDisplay): number {
    let price = item.product.basePrice;
    if (item.design.size === 'XL') price += 2;
    return price;
  }

  getItemTotal(item: OrderItemDisplay): string {
    return (this.getItemPrice(item) * item.quantity).toFixed(2);
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-PT', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }
}