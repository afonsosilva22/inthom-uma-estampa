import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

interface Design {
  id: string;
  productId: string;
  productName: string;
  imageUrl: string;
  color: string;
  size: string;
  price: number;
  isPublic: boolean;
}

@Component({
  selector: 'app-designs',
  templateUrl: './designs.page.html',
  styleUrls: ['./designs.page.scss'],
  standalone: false,
})
export class DesignsPage implements OnInit {

  deletingId: string | null = null;

    designs: Design[] = [
    {
      id: '1',
      productId: 'prod-001',
      productName: 'T-Shirt Clássica',
      imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
      color: '#ffffff',
      size: 'M',
      price: 24.99,
      isPublic: true,
    },
    {
      id: '2',
      productId: 'prod-003',
      productName: 'Tote Bag',
      imageUrl: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=400',
      color: '#e8c49a',
      size: 'Único',
      price: 18.50,
      isPublic: true,
    },
    {
  id: '3',
  productId: 'prod-005',
  productName: 'Mochila Urban',
  imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
  color: '#000000',
  size: 'Único',
  price: 59.90,
  isPublic: true,
},
{
  id: '4',
  productId: 'prod-006',
  productName: 'Sweatshirt Oversized',
  imageUrl: 'https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=400',
  color: '#c9b8a8',
  size: 'XL',
  price: 44.50,
  isPublic: false,
},
{
  id: '5',
  productId: 'prod-007',
  productName: 'Boné Snapback',
  imageUrl: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400',
  color: '#e63946',
  size: 'Único',
  price: 22.00,
  isPublic: true,
},
{
  id: '6',
  productId: 'prod-008',
  productName: 'Camisola de Manga Longa',
  imageUrl: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400',
  color: '#457b9d',
  size: 'S',
  price: 31.99,
  isPublic: false,
},
  ];

  constructor(
    private router: Router,
    private alertController: AlertController
  ) { }

  handleTogglePublic(id: string, isPublic: boolean) {
    const design = this.designs.find(d => d.id === id);
    if (design) {
      design.isPublic = !isPublic;
    }
  }

  handleEdit(design: Design) {
    this.router.navigate(['/edit-design'], {
      state: { design }
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
            setTimeout(() => {
              this.designs = this.designs.filter(d => d.id !== id);
              this.deletingId = null;
            }, 300);
          }
        }
      ]
    });
    await alert.present();
  }

    handleOrder(design: Design) {
    this.router.navigate(['/create-order'], {
      state: { selectedDesign: design }
    });
  }

  ngOnInit() {
  }

}
