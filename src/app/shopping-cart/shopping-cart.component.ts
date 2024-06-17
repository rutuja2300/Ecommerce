import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
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
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent {
  @Input() cart: Product[] = [];
  @Output() removeFromCart = new EventEmitter<number>();
  @Output() updateCart = new EventEmitter<{ id: number, quantity: number }>();

  onRemoveFromCart(productId: number) {
    this.removeFromCart.emit(productId);
  }

  onUpdateCart(productId: number, quantity: number) {
    this.updateCart.emit({ id: productId, quantity });
  }

  getTotal(): number {
    return this.cart.reduce((acc, prod) => acc + (prod.cost * prod.quantity), 0);
  }
}
