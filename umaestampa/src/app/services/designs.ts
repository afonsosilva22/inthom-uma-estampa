import { Injectable } from '@angular/core';

export interface Design {
  id: string;
  productId: string;
  variantId: string;
  uploadedImageUrl: string | null;
  size: string;
  isPublic: boolean;
  status: 'draft' | 'completed';
}

@Injectable({
  providedIn: 'root',
})
export class Designs {

  private designs: Design[] = [
    {
      id: 'design-1',
      productId: 'prod-1',
      variantId: 'var-1',
      uploadedImageUrl: null,
      size: 'M',
      isPublic: true,
      status: 'completed',
    },
    {
      id: 'design-2',
      productId: 'prod-4',
      variantId: 'var-4',
      uploadedImageUrl: null,
      size: 'M',
      isPublic: true,
      status: 'completed',
    },
    {
      id: 'design-3',
      productId: 'prod-5',
      variantId: 'var-3',
      uploadedImageUrl: null,
      size: 'M',
      isPublic: true,
      status: 'completed',
    },
    {
      id: 'design-4',
      productId: 'prod-4',
      variantId: 'var-2',
      uploadedImageUrl: null,
      size: 'M',
      isPublic: true,
      status: 'completed',
    },
    {
      id: 'design-5',
      productId: 'prod-4',
      variantId: 'var-3',
      uploadedImageUrl: null,
      size: 'M',
      isPublic: true,
      status: 'completed',
    },
    {
      id: 'design-6',
      productId: 'prod-2',
      variantId: 'var-2',
      uploadedImageUrl: null,
      size: 'M',
      isPublic: true,
      status: 'completed',
    },
    {
      id: 'design-7',
      productId: 'prod-1',
      variantId: 'var-4',
      uploadedImageUrl: null,
      size: 'M',
      isPublic: true,
      status: 'completed',
    },
    {
      id: 'design-8',
      productId: 'prod-4',
      variantId: 'var-2',
      uploadedImageUrl: null,
      size: 'M',
      isPublic: true,
      status: 'completed',
    },
    {
      id: 'design-9',
      productId: 'prod-3',
      variantId: 'var-1',
      uploadedImageUrl: null,
      size: 'M',
      isPublic: true,
      status: 'completed',
    },
    {
      id: 'design-10',
      productId: 'prod-4',
      variantId: 'var-1',
      uploadedImageUrl: null,
      size: 'M',
      isPublic: true,
      status: 'completed',
    },
  ];

  getDesigns(): Design[] {
    return this.designs.filter(d => d.status === 'completed');
  }

  getDrafts(): Design[] {
    return this.designs.filter(d => d.status === 'draft');
  }

  getById(id: string): Design | undefined {
    return this.designs.find(d => d.id === id);
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
