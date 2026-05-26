import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product, Products } from '../services/products';

@Component({
  selector: 'app-create-design',
  templateUrl: './create-design.page.html',
  styleUrls: ['./create-design.page.scss'],
  standalone: false,
})
export class CreateDesignPage implements OnInit {

  products: Product[] = [];
  selectedProduct: Product | null = null;

  constructor(
    private router: Router,
    private productService: Products
  ) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  selectProduct(product: Product) {
    this.selectedProduct = product;
  }

  handleNext() {
    if (this.selectedProduct) {
      this.router.navigate(['/edit-design'], {
        state: { product: this.selectedProduct }
      });
    }
  }
}
