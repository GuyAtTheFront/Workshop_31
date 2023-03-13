import { Component, Input, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { CartItem } from '../models';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

export class ShoppingCartComponent {
  
  @Input()
  cartItems: CartItem[] = [];

  @Output()
  removeItem = new Subject<CartItem>();

  onRemoveItem(item: CartItem) {
    this.removeItem.next(item);
  }

  // onItemAdded(itemData: {img: string, desc: string}) {
  //   for (let item of this.addedItems) {

  //     console.log(this.addedItems);
      
  //     if (item.description === itemData.desc) {
  //       item.quantity += 1;
  //       return;
  //     } 

  //     this.addedItems.push({image: itemData.img, description: itemData.desc, quantity: 1});
  //     return;
  //   }
  // }
}
