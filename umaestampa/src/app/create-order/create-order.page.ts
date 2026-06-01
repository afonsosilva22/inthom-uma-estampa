// create-order.page.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Design, Designs } from '../services/designs';
import { Product, ProductVariant, Products } from '../services/products';
import { Orders } from '../services/orders';

export interface DesignDisplay {
  design: Design;
  product: Product;
  variant: ProductVariant;
}

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.page.html',
  styleUrls: ['./create-order.page.scss'],
  standalone: false,
})
export class CreateOrderPage implements OnInit {

  displayDesigns: DesignDisplay[] = [];
  selectedItem: DesignDisplay | null = null;
  quantity: number = 1;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private designService: Designs,
    private productService: Products,
    private orderService: Orders
  ) {}

  ngOnInit() {
    this.loadDesigns();
  }

  loadDesigns() {
    const designs = this.designService.getDesigns();

    this.displayDesigns = designs
      .map(design => {
        const product = this.productService.getById(design.productId);
        const variant = product?.variants.find(v => v.id === design.variantId);
        if (!product || !variant) return null;
        return { design, product, variant };
      })
      .filter(d => d !== null) as DesignDisplay[];
  }

  selectDesign(item: DesignDisplay) {
    this.selectedItem = item;
    this.quantity = 1;
  }

  getPrice(item: DesignDisplay): number {
    let price = item.product.basePrice;
    if (item.design.size === 'XL') price += 2;
    return price;
  }

  getTotal(): number {
    if (!this.selectedItem) return 0;
    return this.getPrice(this.selectedItem) * this.quantity;
  }

  decreaseQuantity() {
    if (this.quantity > 1) this.quantity--;
  }

  increaseQuantity() {
    this.quantity++;
  }

  // =========
  // ORDER ADDRESS AND PAYMENT ARE HARD-CODED FOR DEMO PURPOSES
  // =========
  async handleCreateOrder() {
    if (!this.selectedItem) return;

    const order = {
      id: `order-${Date.now()}`,
      status: 'pending' as const,
      orderDate: new Date().toISOString(),
      items: [
        {
          designId: this.selectedItem.design.id,
          quantity: this.quantity,
        }
      ],
      deliveryAddress: {
        street: 'Rua de Santa Catarina, 123',
        postalCode: '4000-450',
        city: 'Porto',
        country: 'Portugal',
      },
      paymentMethod: 'MB Way',
    };

    this.orderService.add(order);
    this.router.navigate(['/orders']);
  }
}