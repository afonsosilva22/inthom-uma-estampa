import { Injectable } from '@angular/core';

export interface ProductVariant {
  color: string;
  colorName: string;
  imageUrl: string;
}

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  basePrice: number;
  sizes?: string[];
  variants: ProductVariant[];
}

@Injectable({
  providedIn: 'root',
})
export class Products {

  private products: Product[] = [
  {
    id: 'prod-001',
    name: 'T-Shirt',
    imageUrl: './assets/images/tshirt_white.png',
    basePrice: 19.99,
    sizes: ['S', 'M', 'L', 'XL'],
    variants: [
      {
        color: '#ffffff',
        colorName: 'Branco',
        imageUrl: './assets/images/tshirt_white.png',
      },
      {
        color: '#000000',
        colorName: 'Preto',
        imageUrl: './assets/images/tshirt_black.png',
      },
      {
        color: '#ff0000',
        colorName: 'Vermelho',
        imageUrl: './assets/images/tshirt_red.png',
      },
      {
        color: '#0000ff',
        colorName: 'Azul',
        imageUrl: './assets/images/tshirt_blue.png',
      },
      {
        color: '#008000',
        colorName: 'Verde',
        imageUrl: './assets/images/tshirt_green.png',
      },
    ],
  },
  {
    id: 'prod-002',
    name: 'Hoodie',
    imageUrl: './assets/images/hoodie_white.png',
    basePrice: 39.99,
    sizes: ['S', 'M', 'L', 'XL'],
    variants: [
      {
        color: '#ffffff',
        colorName: 'Branco',
        imageUrl: './assets/images/hoodie_white.png',
      },
      {
        color: '#000000',
        colorName: 'Preto',
        imageUrl: './assets/images/hoodie_black.png',
      },
      {
        color: '#ff0000',
        colorName: 'Vermelho',
        imageUrl: './assets/images/hoodie_red.png',
      },
      {
        color: '#0000ff',
        colorName: 'Azul',
        imageUrl: './assets/images/hoodie_blue.png',
      },
      {
        color: '#008000',
        colorName: 'Verde',
        imageUrl: './assets/images/hoodie_green.png',
      },
    ],
  },
  {
    id: 'prod-003',
    name: 'Boné',
    imageUrl: './assets/images/cap_white.jpg',
    basePrice: 17.99,
    sizes: ['Criança', 'Adulto'],
    variants: [
      {
        color: '#ffffff',
        colorName: 'Branco',
        imageUrl: './assets/images/cap_white.jpg',
      },
      {
        color: '#000000',
        colorName: 'Preto',
        imageUrl: './assets/images/cap_black.png',
      },
      {
        color: '#ff0000',
        colorName: 'Vermelho',
        imageUrl: './assets/images/cap_red.png',
      },
      {
        color: '#0000ff',
        colorName: 'Azul',
        imageUrl: './assets/images/cap_blue.png',
      },
      {
        color: '#008000',
        colorName: 'Verde',
        imageUrl: './assets/images/cap_green.png',
      },
    ],
  },
  {
    id: 'prod-004',
    name: 'Capa de telemóvel',
    imageUrl: './assets/images/phone_case_white.png',
    basePrice: 24.99,
    sizes: ['Iphone', 'Samsung', 'Xiaomi'],
    variants: [
      {
        color: '#ffffff',
        colorName: 'Branco',
        imageUrl: './assets/images/phone_case_white.png',
      },
      {
        color: '#000000',
        colorName: 'Preto',
        imageUrl: './assets/images/phone_case_black.png',
      },
      {
        color: '#ff0000',
        colorName: 'Vermelho',
        imageUrl: './assets/images/phone_case_red.png',
      },
      {
        color: '#0000ff',
        colorName: 'Azul',
        imageUrl: './assets/images/phone_case_blue.png',
      },
      {
        color: '#008000',
        colorName: 'Verde',
        imageUrl: './assets/images/phone_case_green.png',
      },
    ],
  },
  {
    id: 'prod-005',
    name: 'Caneca',
    imageUrl: './assets/images/mug_white.jpg',
    basePrice: 12.99,
    sizes: ['Único'],
    variants: [
      {
        color: '#ffffff',
        colorName: 'Branco',
        imageUrl: './assets/images/mug_white.jpg',
      },
      {
        color: '#000000',
        colorName: 'Preto',
        imageUrl: './assets/images/mug_black.png',
      },
      {
        color: '#ff0000',
        colorName: 'Vermelho',
        imageUrl: './assets/images/mug_red.png',
      },
      {
        color: '#0000ff',
        colorName: 'Azul',
        imageUrl: './assets/images/mug_blue.png',
      },
      {
        color: '#008000',
        colorName: 'Verde',
        imageUrl: './assets/images/mug_green.png',
      },
    ],
  },
];

  getProducts(): Product[] {
    return this.products;
  }

  getById(id: string): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}
