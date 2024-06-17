import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

interface Product {
  id: number;
  name: string;
  cost: number;
  brand: string;
  category: string;
  rating: number;
  discount: number;
  quantity: number;
}
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [
    { id: 1, name: 'Product 1', cost: 100, brand: 'Brand A', category: 'Category 1', rating: 4, discount: 10, quantity: 1 },
    { id: 2, name: 'Product 2', cost: 200, brand: 'Brand B', category: 'Category 2', rating: 3, discount: 20, quantity: 1 },
    { id: 3, name: 'Product 3', cost: 150, brand: 'Brand A', category: 'Category 1', rating: 5, discount: 30, quantity: 1 },
    { id: 4, name: 'Product 4', cost: 80, brand: 'Brand C', category: 'Category 3', rating: 2, discount: 5, quantity: 1 }
  ];

  filteredProducts: Product[] = this.products;

  @Output() addToCart = new EventEmitter<Product>();

  onAddToCart(product: Product) {
    this.addToCart.emit({ ...product });
  }

  sortProducts(criteria: string) {
    this.filteredProducts.sort((a, b) => {
      switch (criteria) {
        case 'price':
          return a.cost - b.cost;
        case 'rating':
          return b.rating - a.rating;
        case 'discount':
          return b.discount - a.discount;
        default:
          return 0;
      }
    });
  }

  filterProducts(event: Event) {
    const category = (event.target as HTMLSelectElement).value;
    this.filteredProducts = this.products.filter(p => p.category === category || category === 'all');
  }
}
