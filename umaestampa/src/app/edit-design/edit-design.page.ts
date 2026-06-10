import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Product, ProductVariant } from '../services/products';
import { Design, Designs } from '../services/designs';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-edit-design',
  templateUrl: './edit-design.page.html',
  styleUrls: ['./edit-design.page.scss'],
  standalone: false,
})
export class EditDesignPage implements OnInit {

  product: Product | null = null;
  existingDesign: Design | null = null;
  selectedVariant: ProductVariant | null = null;
  selectedSize: string = '';
  uploadedImageUrl: string | null = null;
  price: number = 0;
  scale: number = 1;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private designService: Designs,
    private photoService: PhotoService
  ) {}

  ngOnInit() {
    const state = this.router.getCurrentNavigation()?.extras.state as {
      product: Product;
      design?: Design;
    };

    if (state?.product) {
      this.product = state.product;
      this.existingDesign = state.design || null;

      if (this.existingDesign) {
        // Encontra a variante pelo variantId guardado no design
        this.selectedVariant = this.product.variants.find(
          v => v.id === this.existingDesign!.variantId
        ) || this.product.variants[0];
        this.selectedSize = this.existingDesign.size;
        this.uploadedImageUrl = this.existingDesign.uploadedImageUrl;
        this.scale = this.existingDesign.scale || 1;
      } else {
        this.selectedVariant = this.product.variants[0];
        this.selectedSize = this.product.sizes[0] || 'M';
        this.scale = 1;
      }

      this.calculatePrice();
    } else {
      this.router.navigate(['/create-design']);
    }
  }

  selectVariant(variant: ProductVariant) {
    this.selectedVariant = variant;
  }

  selectSize(size: string) {
    this.selectedSize = size;
    this.calculatePrice();
  }

  calculatePrice() {
    if (!this.product) return;
    let price = this.product.basePrice;
    if (this.selectedSize === 'XL') price += 2;
    this.price = price;
  }

  async handleImageUpload() {
    const base64Image = await this.photoService.pickPhoto();
    if (base64Image) {
      this.uploadedImageUrl = base64Image;
    }
  }

  removeImage() {
    this.uploadedImageUrl = null;
  }

  buildDesignObject(status: 'draft' | 'completed'): Design {
    return {
      id: this.existingDesign?.id || `design-${Date.now()}`,
      productId: this.product!.id,
      variantId: this.selectedVariant!.id,       // só guarda o id da variante
      uploadedImageUrl: this.uploadedImageUrl,    // imagem do utilizador ou null
      size: this.selectedSize,
      isPublic: this.existingDesign?.isPublic || false,
      status: status,
      scale: this.scale,
    };
  }

  async handleSaveDraft() {
    const design = this.buildDesignObject('draft');
    if (this.existingDesign) {
      await this.designService.updateDesign(this.existingDesign.id, design);
    } else {
      await this.designService.insertDesign(design);
    }
    this.router.navigate(['/drafts']);
  }

  async handleFinish() {
    if (!this.uploadedImageUrl) {
      const alert = await this.alertController.create({
        header: 'Imagem em falta',
        message: 'Por favor, carrega uma imagem antes de finalizar.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    const design = this.buildDesignObject('completed');
    if (this.existingDesign) {
      await this.designService.updateDesign(this.existingDesign.id, design);
    } else {
      await this.designService.insertDesign(design);
    }
    this.router.navigate(['/designs']);
  }

  goBack() {
    this.router.navigate(['/create-design']);
  }
}