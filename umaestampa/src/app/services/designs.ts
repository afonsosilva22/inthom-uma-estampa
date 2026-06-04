import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';

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

  private designs: Design[] = [];

  constructor(private storage: Storage) {
    this.init();
  }

  private initPromise: Promise<void> | null = null;

  init(): Promise<void> {
    if (!this.initPromise) {
      this.initPromise = this.doInit();
    }
    return this.initPromise;
  }

  private async doInit() {
    await this.storage.defineDriver(CordovaSQLiteDriver);
    await this.storage.create();
    const designs = await this.storage.get('designs');
    if (designs) {
      this.designs = designs;
    }
  }

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

  async insertDesign(design: Design): Promise<void> {
    if (!design.id) {
      design.id = Date.now().toString();
    }
    this.designs.push(design);
    await this.storage.set('designs', this.designs);
  }

  async updateDesign(id: string, changes: Partial<Design>): Promise<void> {
    const design = this.designs.find(d => d.id === id);
    if (design) {
      Object.assign(design, changes);
      await this.storage.set('designs', this.designs);
    }
  }

  async deleteDesign(id: string): Promise<void> {
    const index = this.designs.findIndex(d => d.id === id);
    if (index >= 0) {
      this.designs.splice(index, 1);
      await this.storage.set('designs', this.designs);
    }
  }
}