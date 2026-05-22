import { Injectable } from '@angular/core';

export interface Design {
  id: string;
  productId: string;
  productName: string;
  imageUrl: string;
  color: string;
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
      productName: 'T-Shirt Clássica',
      imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400',
      color: '#ffffff',
      size: 'M',
      price: 24.99,
      isPublic: true,
      status: 'completed',
    },
    {
  id: '5',
  productId: 'prod-005',
  productName: 'Mochila Urban',
  imageUrl: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400',
  color: '#000000',
  size: 'Único',
  price: 59.90,
  isPublic: true,
  status: 'completed',
},
{
  id: '6',
  productId: 'prod-006',
  productName: 'Sweatshirt Oversized',
  imageUrl: 'https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=400',
  color: '#c9b8a8',
  size: 'XL',
  price: 44.50,
  isPublic: false,
  status: 'draft',
},
{
  id: '7',
  productId: 'prod-007',
  productName: 'Boné Snapback',
  imageUrl: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400',
  color: '#e63946',
  size: 'Único',
  price: 22.00,
  isPublic: true,
  status: 'completed',
},
{
  id: '8',
  productId: 'prod-008',
  productName: 'Camisola de Manga Longa',
  imageUrl: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=400',
  color: '#457b9d',
  size: 'S',
  price: 31.99,
  isPublic: false,
  status: 'draft',
},
{
  id: '9',
  productId: 'prod-009',
  productName: 'Polo Bordado',
  imageUrl: 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=400',
  color: '#2d6a4f',
  size: 'M',
  price: 36.00,
  isPublic: true,
  status: 'completed',
},
{
  id: '10',
  productId: 'prod-010',
  productName: 'Calções de Treino',
  imageUrl: 'https://images.unsplash.com/photo-1562886877-2b2fd3bbe3b0?w=400',
  color: '#343a40',
  size: 'L',
  price: 28.50,
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
