import { Component } from '@angular/core';
import { CartItem, InventoryItem } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ws31';
  
  cartItems: CartItem[] = [];

  onItemAdded(item: InventoryItem) {
    console.log(item);

    // check if item in cartItems
    const found = this.cartItems.find(x => x.description === item.description);
    
    // if no, push to cartItems
    if (found === undefined) {
      this.cartItems.push({
        image: item.image,
        description: item.description,
        quantity: 1
      })
    } else {
    // if yes, increase quantity by one
      found.quantity += 1;
    }
  }

  onItemRemoved(item: CartItem) {
      
    // check if item in cartItems
    const found = this.cartItems.find(x => x.description === item.description);

    if (found === undefined) {
      return;
    }

    found.quantity -= 1;
    
    if (found.quantity <= 0) {
      const idx = this.cartItems.findIndex(x => x.description === found.description)
      this.cartItems.splice(idx, 1);
    }

  }
}
