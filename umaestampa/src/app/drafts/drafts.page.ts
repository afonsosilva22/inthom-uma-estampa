import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Design, Designs } from '../services/designs';
import { Product, ProductVariant, Products } from '../services/products';

export interface DraftDisplay {
  design: Design;
  product: Product;
  variant: ProductVariant;
}

@Component({
  selector: 'app-drafts',
  templateUrl: './drafts.page.html',
  styleUrls: ['./drafts.page.scss'],
  standalone: false,
})
export class DraftsPage {

  displayDrafts: DraftDisplay[] = [];

  constructor(
    private router: Router,
    private alertController: AlertController,
    private designService: Designs,
    private productService: Products
  ) {}

  async ionViewWillEnter() {
    await this.productService.init();
    await this.designService.init();
    this.loadDrafts();
  }

  loadDrafts() {
    const drafts = this.designService.getDrafts();

    this.displayDrafts = drafts
      .map(design => {
        const product = this.productService.getById(design.productId);
        const variant = product?.variants.find(v => v.id === design.variantId);
        if (!product || !variant) return null;
        return { design, product, variant };
      })
      .filter(d => d !== null) as DraftDisplay[];
  }

  getPrice(item: DraftDisplay): number {
    let price = item.product.basePrice;
    if (item.design.size === 'XL') price += 2;
    return price;
  }

  handleEdit(item: DraftDisplay) {
    this.router.navigate(['/edit-design'], {
      state: { design: item.design, product: item.product }
    });
  }

  async handleDelete(id: string) {
    const alert = await this.alertController.create({
      header: 'Eliminar rascunho',
      message: 'Tens a certeza que queres eliminar este rascunho?',
      buttons: [
        { text: 'Cancelar', role: 'cancel' },
        {
          text: 'Eliminar',
          role: 'destructive',
          handler: async () => {
            await this.designService.deleteDesign(id);
            this.loadDrafts();
          }
        }
      ]
    });
    await alert.present();
  }
}