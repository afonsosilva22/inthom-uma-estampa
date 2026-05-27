import { Injectable } from '@angular/core';

export interface Design {
  id: string;
  productId: string;
  productName: string;
  imageUrl: string;
  color: string;
  colorName: string;
  productImageUrl: string;
  size: string;
  price: number;
  isPublic: boolean;
  status: 'draft' | 'completed';
}

@Injectable({
  providedIn: 'root',
})
export class Designs {

  private designs: Design[] = [
    {
      id: '1',
      productId: 'prod-001',
      productName: 'T-Shirt',
      imageUrl: '',
      color: '#ffffff',
      colorName: 'Branco',
      productImageUrl: './assets/images/tshirt_white.png',
      size: 'M',
      price: 24.99,
      isPublic: true,
      status: 'completed',
    },
    {
      id: '2',
      productId: 'prod-002',
      productName: 'Hoodie',
      imageUrl: '',
      color: '#0000ff',
      colorName: 'Azul',
      productImageUrl: './assets/images/hoodie_blue.png',
      size: 'L',
      price: 49.99,
      isPublic: false,
      status: 'draft',
    },
    {
      id: '3',
      productId: 'prod-003',
      productName: 'Boné',
      imageUrl: '',
      color: '#000000',
      colorName: 'Preto',
      productImageUrl: './assets/images/cap_black.png',
      size: 'Único',
      price: 22.00,
      isPublic: true,
      status: 'completed',
    },
    {
      id: '4',
      productId: 'prod-004',
      productName: 'Capa de Telemóvel',
      imageUrl: '',
      color: '#ff0000',
      colorName: 'Vermelho',
      productImageUrl: './assets/images/phone_case_red.png',
      size: 'Único',
      price: 18.50,
      isPublic: false,
      status: 'draft',
    },
    {
      id: '5',
      productId: 'prod-005',
      productName: 'Caneca',
      imageUrl: '',
      color: '#0000ff',
      colorName: 'Azul',
      productImageUrl: './assets/images/mug_blue.png',
      size: 'Único',
      price: 14.99,
      isPublic: true,
      status: 'completed',
    },
    {
      id: '6',
      productId: 'prod-001',
      productName: 'T-Shirt',
      imageUrl: '',
      color: '#ffffff',
      colorName: 'Branco',
      productImageUrl: './assets/images/tshirt_white.png',
      size: 'XL',
      price: 24.99,
      isPublic: false,
      status: 'draft',
    },
    {
      id: '7',
      productId: 'prod-002',
      productName: 'Hoodie',
      imageUrl: '',
      color: '#0000ff',
      colorName: 'Azul',
      productImageUrl: './assets/images/hoodie_blue.png',
      size: 'M',
      price: 49.99,
      isPublic: true,
      status: 'completed',
    },
    {
      id: '8',
      productId: 'prod-004',
      productName: 'Capa de Telemóvel',
      imageUrl: '',
      color: '#ff0000',
      colorName: 'Vermelho',
      productImageUrl: './assets/images/phone_case_red.png',
      size: 'Único',
      price: 18.50,
      isPublic: false,
      status: 'draft',
    },
    {
      id: '9',
      productId: 'prod-005',
      productName: 'Caneca',
      imageUrl: '',
      color: '#ff0000',
      colorName: 'Vermelho',
      productImageUrl: './assets/images/mug_red.png',
      size: 'Único',
      price: 14.99,
      isPublic: true,
      status: 'completed',
    },
    {
      id: '10',
      productId: 'prod-003',
      productName: 'Boné',
      imageUrl: '',
      color: '#000000',
      colorName: 'Preto',
      productImageUrl: './assets/images/cap_black.png',
      size: 'Único',
      price: 22.00,
      isPublic: false,
      status: 'draft',
    },
  ];

  getDesigns(): Design[] {
    return this.designs.filter(d => d.status === 'completed');
  }

  getDrafts(): Design[] {
    return this.designs.filter(d => d.status === 'draft');
  }

  getAll(): Design[] {
    return this.designs;
  }

  add(design: Design): void {
    this.designs.push(design);
  }

  update(id: string, changes: Partial<Design>): void {
    const design = this.designs.find(d => d.id === id);
    if (design) {
      Object.assign(design, changes);
    }
  }

  delete(id: string): void {
    const index = this.designs.findIndex(d => d.id === id);
    if (index >= 0) {
      this.designs.splice(index, 1);
    }
  }
}
