import { ShoppingListService } from '../shopping-list.service';
import { Ingredient } from './../../shared/ingredient.model';
import { Component, ElementRef, ViewChild, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddItem(){
    const itemName = this.nameInputRef.nativeElement.value;
    const itemAmount = this.amountInputRef.nativeElement.value;
    const newItem = new Ingredient(itemName, itemAmount);

    this.shoppingListService.addIngradient(newItem);

  }

}
