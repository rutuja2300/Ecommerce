import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';

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
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,ShoppingCartComponent,ProductListComponent,NavbarComponent,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cart: Product[] = [];
  currentView: 'home' | 'cart' = 'home';
  addToCart(product: Product) {
    const index = this.cart.findIndex(p => p.id === product.id);
    if (index !== -1) {
      this.cart[index].quantity += product.quantity;
    } else {
      this.cart.push(product);
    }
  }

  removeFromCart(productId: number) {
    this.cart = this.cart.filter(p => p.id !== productId);
  }

  updateCart(productId: number, quantity: number) {
    const index = this.cart.findIndex(p => p.id === productId);
    if (index !== -1) {
      this.cart[index].quantity = quantity;
    }
  }

  showHome() {
    this.currentView = 'home';
  }

  showCart() {
    this.currentView = 'cart';
  }
}
