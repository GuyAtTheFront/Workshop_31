import { Component, EventEmitter, Output } from '@angular/core';
import { InventoryItem } from '../models';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent {
  
  private url = "https://img.freepik.com/free-vector/red-free-promotional-badge-vector_53876-40850.jpg?w=2000";

  inventoryItems: InventoryItem[] = [
    {image: this.url, description: "Item One"},
    {image: this.url, description: "Item Two"},
    {image: this.url, description: "Item Three"},
    {image: this.url, description: "Item Four"},
  ];

  @Output() 
  itemAdded = new EventEmitter<{image: string, description: string}>();

  
onAddItem(item: InventoryItem) {
  this.itemAdded.emit({
    image: item.image, 
    description: item.description
  });
}

  // TODO: OnClick

  // getItems() {
  //   return this.items;
  // }

  // setItems() {
  //   return this.items;
  // }

  // addItems(image: string, description: string) {
  //   this.items.push({image, description});
  // }

}
