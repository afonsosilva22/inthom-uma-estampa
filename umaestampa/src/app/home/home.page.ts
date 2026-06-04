import { Component } from '@angular/core';
import { Designs, Design } from '../services/designs';
import { Orders, Order } from '../services/orders';
import { Products, Product, ProductVariant } from '../services/products';

export interface RecentDesignDisplay {
  design: Design;
  product: Product;
  variant: ProductVariant;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage {
  userName = 'Utilizador';
  stats = {
    designs: 0,
    drafts: 0,
    orders: 0,
    publicDesigns: 0,
  };
  recentDesigns: RecentDesignDisplay[] = [];

  constructor(
    private designService: Designs,
    private orderService: Orders,
    private productService: Products
  ) { }

  async ionViewWillEnter() {
    await this.productService.init();
    await this.designService.init();
    await this.orderService.init();
    this.loadDashboardData();
  }

  loadDashboardData() {
    const allDesigns = this.designService.getAll();
    const completedDesigns = allDesigns.filter(d => d.status === 'completed');
    
    this.stats = {
      designs: completedDesigns.length,
      drafts: allDesigns.filter(d => d.status === 'draft').length,
      orders: this.orderService.getOrders().length,
      publicDesigns: allDesigns.filter(d => d.isPublic).length,
    };

    // Load recent designs
    this.recentDesigns = completedDesigns
      .slice(-4) // get last 4
      .reverse() // newest first
      .map(design => {
        const product = this.productService.getById(design.productId);
        const variant = product?.variants.find(v => v.id === design.variantId);
        if (!product || !variant) return null;
        return { design, product, variant };
      })
      .filter(d => d !== null) as RecentDesignDisplay[];
  }
}
