import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Design, Designs } from '../services/designs';
import { Product, ProductVariant, Products } from '../services/products';

// Interface local só para o display — junta o Design com a info do produto
export interface DesignDisplay {
  design: Design;
  product: Product;
  variant: ProductVariant;
}

@Component({
  selector: 'app-designs',
  templateUrl: './designs.page.html',
  styleUrls: ['./designs.page.scss'],
  standalone: false,
})
export class DesignsPage {

  deletingId: string | null = null;
  displayDesigns: DesignDisplay[] = [];

  constructor(
    private router: Router,
    private alertController: AlertController,
    private designService: Designs,
    private productService: Products
  ) {}

  async ionViewWillEnter() {
    await this.productService.init();
    await this.designService.init();
    this.loadDesigns();
  }

  loadDesigns() {
    const designs = this.designService.getDesigns();

    // Para cada design, vai buscar o produto e a variante correspondente
    this.displayDesigns = designs
      .map(design => {
        const product = this.productService.getById(design.productId);
        const variant = product?.variants.find(v => v.id === design.variantId);
        if (!product || !variant) return null;
        return { design, product, variant };
      })
      .filter(d => d !== null) as DesignDisplay[];
  }

  getPrice(item: DesignDisplay): number {
    let price = item.product.basePrice;
    if (item.design.size === 'XL') price += 2;
    return price;
  }

  async handleTogglePublic(id: string, isPublic: boolean) {
    await this.designService.updateDesign(id, { isPublic: !isPublic });
    this.loadDesigns();
  }

  handleEdit(item: DesignDisplay) {
    this.router.navigate(['/edit-design'], {
      state: { design: item.design, product: item.product }
    });
  }

  handleOrder(item: DesignDisplay) {
    this.router.navigate(['/create-order'], {
      state: { selectedDesign: item.design }
    });
  }

  async handleDelete(id: string) {
    const alert = await this.alertController.create({
      header: 'Eliminar design',
      message: 'Tens a certeza que queres eliminar este design?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: () => {
            this.deletingId = id;
            setTimeout(async () => {
              await this.designService.deleteDesign(id);
              this.loadDesigns();
              this.deletingId = null;
            }, 300);
          }
        }
      ]
    });
    await alert.present();
  }
}