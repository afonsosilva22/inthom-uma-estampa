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

  private products: Product[] = [];

  constructor() {
    this.init();
  }

  private initPromise: Promise<void> | null = null;

  // inicializa o carregamento dos produtos do ficheiro json, garantindo que a inicialização só acontece uma vez
  init(): Promise<void> {
    if (!this.initPromise) {
      this.initPromise = this.doInit();
    }
    return this.initPromise;
  }

  // carrega os produtos do ficheiro json e guarda-os na variável de instância, lidando com erros de carregamento
  private async doInit(): Promise<void> {
    await fetch('./assets/data/products.json')
      .then(res => res.json())
      .then((json: Product[]) => {
        this.products = json;
      })
      .catch(error => {
        console.error('Erro ao carregar produtos:', error);
      });
  }

  // devolve todos os produtos carregados
  getProducts(): Product[] {
    return this.products;
  }

  // procura um produto pelo identificador e devolve-o, ou undefined se não existir
  getById(id: string): Product | undefined {
    return this.products.find(p => p.id === id);
  }
}