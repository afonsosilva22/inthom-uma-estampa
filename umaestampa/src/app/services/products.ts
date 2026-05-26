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
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
    basePrice: 19.99,
    variants: [
      {
        color: '#ffffff',
        colorName: 'White',
        imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
      },
      {
        color: '#000000',
        colorName: 'Black',
        imageUrl: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=400',
      },
      {
        color: '#ff0000',
        colorName: 'Red',
        imageUrl: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400',
      },
      {
        color: '#0000ff',
        colorName: 'Blue',
        imageUrl: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400',
      },
      {
        color: '#008000',
        colorName: 'Green',
        imageUrl: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400',
      },
    ],
  },
  {
    id: 'prod-002',
    name: 'Hoodie',
    imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400',
    basePrice: 39.99,
    variants: [
      {
        color: '#ffffff',
        colorName: 'White',
        imageUrl: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400',
      },
      {
        color: '#000000',
        colorName: 'Black',
        imageUrl: 'https://images.unsplash.com/photo-1509942774463-acf339cf87d5?w=400',
      },
      {
        color: '#ff0000',
        colorName: 'Red',
        imageUrl: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=400',
      },
      {
        color: '#0000ff',
        colorName: 'Blue',
        imageUrl: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400',
      },
      {
        color: '#008000',
        colorName: 'Green',
        imageUrl: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400',
      },
    ],
  },
  {
    id: 'prod-003',
    name: 'Cap',
    imageUrl: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400',
    basePrice: 17.99,
    variants: [
      {
        color: '#ffffff',
        colorName: 'White',
        imageUrl: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=400',
      },
      {
        color: '#000000',
        colorName: 'Black',
        imageUrl: 'https://images.unsplash.com/photo-1534215754734-18e55d13e346?w=400',
      },
      {
        color: '#ff0000',
        colorName: 'Red',
        imageUrl: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400',
      },
      {
        color: '#0000ff',
        colorName: 'Blue',
        imageUrl: 'https://images.unsplash.com/photo-1517940310602-26535839fe84?w=400',
      },
      {
        color: '#008000',
        colorName: 'Green',
        imageUrl: 'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=400',
      },
    ],
  },
  {
    id: 'prod-004',
    name: 'Phone Case',
    imageUrl: 'https://images.unsplash.com/photo-1601593346740-925612772716?w=400',
    basePrice: 24.99,
    variants: [
      {
        color: '#ffffff',
        colorName: 'White',
        imageUrl: 'https://images.unsplash.com/photo-1601593346740-925612772716?w=400',
      },
      {
        color: '#000000',
        colorName: 'Black',
        imageUrl: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=400',
      },
      {
        color: '#ff0000',
        colorName: 'Red',
        imageUrl: 'https://images.unsplash.com/photo-1603314585442-ee3b3c16fbcf?w=400',
      },
      {
        color: '#0000ff',
        colorName: 'Blue',
        imageUrl: 'https://images.unsplash.com/photo-1603313011108-d0d7c6d3d9df?w=400',
      },
      {
        color: '#008000',
        colorName: 'Green',
        imageUrl: 'https://images.unsplash.com/photo-1603313011109-0b5f7c8a9c6b?w=400',
      },
    ],
  },
  {
    id: 'prod-005',
    name: 'Mug',
    imageUrl: 'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400',
    basePrice: 12.99,
    variants: [
      {
        color: '#ffffff',
        colorName: 'White',
        imageUrl: 'https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400',
      },
      {
        color: '#000000',
        colorName: 'Black',
        imageUrl: 'https://images.unsplash.com/photo-1577937927133-66ef06acdf18?w=400',
      },
      {
        color: '#ff0000',
        colorName: 'Red',
        imageUrl: 'https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=400',
      },
      {
        color: '#0000ff',
        colorName: 'Blue',
        imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400',
      },
      {
        color: '#008000',
        colorName: 'Green',
        imageUrl: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400',
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
