import { Injectable } from '@angular/core';

export interface ProductVariant {
  id: string;
  color: string;
  colorName: string;
  imageUrl: string;
}

export interface Product {
  id: string;
  name: string;
  basePrice: number;
  sizes: string[];
  variants: ProductVariant[];
}

@Injectable({
  providedIn: 'root',
})
export class Products {

  private products: Product[] = [
  {
    id: 'prod-1',
    name: 'T-Shirt',
    basePrice: 19.99,
    sizes: ['S', 'M', 'L', 'XL'],
    variants: [
      {
        id: 'var-1',
        color: '#ffffff',
        colorName: 'Branco',
        imageUrl: './assets/images/tshirt_white.png',
      },
      {
        id: 'var-2',
        color: '#000000',
        colorName: 'Preto',
        imageUrl: './assets/images/tshirt_black.png',
      },
      {
        id: 'var-3',
        color: '#ff0000',
        colorName: 'Vermelho',
        imageUrl: './assets/images/tshirt_red.png',
      },
      {
        id: 'var-4',
        color: '#0000ff',
        colorName: 'Azul',
        imageUrl: './assets/images/tshirt_blue.png',
      },
      {
        id: 'var-5',
        color: '#008000',
        colorName: 'Verde',
        imageUrl: './assets/images/tshirt_green.png',
      },
    ],
  },
  {
    id: 'prod-2',
    name: 'Hoodie',
    basePrice: 39.99,
    sizes: ['S', 'M', 'L', 'XL'],
    variants: [
      {
        id: 'var-1',
        color: '#ffffff',
        colorName: 'Branco',
        imageUrl: './assets/images/hoodie_white.png',
      },
      {
        id: 'var-2',
        color: '#000000',
        colorName: 'Preto',
        imageUrl: './assets/images/hoodie_black.png',
      },
      {
        id: 'var-3',
        color: '#ff0000',
        colorName: 'Vermelho',
        imageUrl: './assets/images/hoodie_red.png',
      },
      {
        id: 'var-4',
        color: '#0000ff',
        colorName: 'Azul',
        imageUrl: './assets/images/hoodie_blue.png',
      },
      {
        id: 'var-5',
        color: '#008000',
        colorName: 'Verde',
        imageUrl: './assets/images/hoodie_green.png',
      },
    ],
  },
  {
    id: 'prod-3',
    name: 'Boné',
    basePrice: 17.99,
    sizes: ['Criança', 'Adulto'],
    variants: [
      {
        id: 'var-1',
        color: '#ffffff',
        colorName: 'Branco',
        imageUrl: './assets/images/cap_white.jpg',
      },
      {
        id: 'var-2',
        color: '#000000',
        colorName: 'Preto',
        imageUrl: './assets/images/cap_black.png',
      },
      {
        id: 'var-3',
        color: '#ff0000',
        colorName: 'Vermelho',
        imageUrl: './assets/images/cap_red.png',
      },
      {
        id: 'var-4',
        color: '#0000ff',
        colorName: 'Azul',
        imageUrl: './assets/images/cap_blue.png',
      },
      {
        id: 'var-5',
        color: '#008000',
        colorName: 'Verde',
        imageUrl: './assets/images/cap_green.png',
      },
    ],
  },
  {
    id: 'prod-4',
    name: 'Capa de telemóvel',
    basePrice: 24.99,
    sizes: ['Iphone', 'Samsung', 'Xiaomi'],
    variants: [
      {
        id: 'var-1',
        color: '#ffffff',
        colorName: 'Branco',
        imageUrl: './assets/images/phone_case_white.png',
      },
      {
        id: 'var-2',
        color: '#000000',
        colorName: 'Preto',
        imageUrl: './assets/images/phone_case_black.png',
      },
      {
        id: 'var-3',
        color: '#ff0000',
        colorName: 'Vermelho',
        imageUrl: './assets/images/phone_case_red.png',
      },
      {
        id: 'var-4',
        color: '#0000ff',
        colorName: 'Azul',
        imageUrl: './assets/images/phone_case_blue.png',
      },
      {
        id: 'var-5',
        color: '#008000',
        colorName: 'Verde',
        imageUrl: './assets/images/phone_case_green.png',
      },
    ],
  },
  {
    id: 'prod-5',
    name: 'Caneca',
    basePrice: 12.99,
    sizes: ['Único'],
    variants: [
      {
        id: 'var-1',
        color: '#ffffff',
        colorName: 'Branco',
        imageUrl: './assets/images/mug_white.jpg',
      },
      {
        id: 'var-2',
        color: '#000000',
        colorName: 'Preto',
        imageUrl: './assets/images/mug_black.png',
      },
      {
        id: 'var-3',
        color: '#ff0000',
        colorName: 'Vermelho',
        imageUrl: './assets/images/mug_red.png',
      },
      {
        id: 'var-4',
        color: '#0000ff',
        colorName: 'Azul',
        imageUrl: './assets/images/mug_blue.png',
      },
      {
        id: 'var-5',
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
