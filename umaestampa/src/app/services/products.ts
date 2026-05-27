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
    variants: [
      {
        color: '#ffffff',
        colorName: 'White',
        imageUrl: './assets/images/tshirt_white.png',
      },
      {
        color: '#000000',
        colorName: 'Black',
        imageUrl: './assets/images/tshirt_black.png',
      },
      {
        color: '#ff0000',
        colorName: 'Red',
        imageUrl: './assets/images/tshirt_red.png',
      },
      {
        color: '#0000ff',
        colorName: 'Blue',
        imageUrl: './assets/images/tshirt_blue.png',
      },
      {
        color: '#008000',
        colorName: 'Green',
        imageUrl: './assets/images/tshirt_green.png',
      },
    ],
  },
  {
    id: 'prod-002',
    name: 'Hoodie',
    imageUrl: './assets/images/hoodie_white.png',
    basePrice: 39.99,
    variants: [
      {
        color: '#ffffff',
        colorName: 'White',
        imageUrl: './assets/images/hoodie_white.png',
      },
      {
        color: '#000000',
        colorName: 'Black',
        imageUrl: './assets/images/hoodie_black.png',
      },
      {
        color: '#ff0000',
        colorName: 'Red',
        imageUrl: './assets/images/hoodie_red.png',
      },
      {
        color: '#0000ff',
        colorName: 'Blue',
        imageUrl: './assets/images/hoodie_blue.png',
      },
      {
        color: '#008000',
        colorName: 'Green',
        imageUrl: './assets/images/hoodie_green.png',
      },
    ],
  },
  {
    id: 'prod-003',
    name: 'Boné',
    imageUrl: './assets/images/cap_white.jpg',
    basePrice: 17.99,
    variants: [
      {
        color: '#ffffff',
        colorName: 'White',
        imageUrl: './assets/images/cap_white.png',
      },
      {
        color: '#000000',
        colorName: 'Black',
        imageUrl: './assets/images/cap_black.png',
      },
      {
        color: '#ff0000',
        colorName: 'Red',
        imageUrl: './assets/images/cap_red.png',
      },
      {
        color: '#0000ff',
        colorName: 'Blue',
        imageUrl: './assets/images/cap_blue.png',
      },
      {
        color: '#008000',
        colorName: 'Green',
        imageUrl: './assets/images/cap_green.png',
      },
    ],
  },
  {
    id: 'prod-004',
    name: 'Capa de telemóvel',
    imageUrl: './assets/images/phone_case_white.png',
    basePrice: 24.99,
    variants: [
      {
        color: '#ffffff',
        colorName: 'White',
        imageUrl: './assets/images/phone_case_white.png',
      },
      {
        color: '#000000',
        colorName: 'Black',
        imageUrl: './assets/images/phone_case_black.png',
      },
      {
        color: '#ff0000',
        colorName: 'Red',
        imageUrl: './assets/images/phone_case_red.png',
      },
      {
        color: '#0000ff',
        colorName: 'Blue',
        imageUrl: './assets/images/phone_case_blue.png',
      },
      {
        color: '#008000',
        colorName: 'Green',
        imageUrl: './assets/images/phone_case_green.png',
      },
    ],
  },
  {
    id: 'prod-005',
    name: 'Caneca',
    imageUrl: './assets/images/mug_white.jpg',
    basePrice: 12.99,
    variants: [
      {
        color: '#ffffff',
        colorName: 'White',
        imageUrl: './assets/images/mug_white.png',
      },
      {
        color: '#000000',
        colorName: 'Black',
        imageUrl: './assets/images/mug_black.png',
      },
      {
        color: '#ff0000',
        colorName: 'Red',
        imageUrl: './assets/images/mug_red.png',
      },
      {
        color: '#0000ff',
        colorName: 'Blue',
        imageUrl: './assets/images/mug_blue.png',
      },
      {
        color: '#008000',
        colorName: 'Green',
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
