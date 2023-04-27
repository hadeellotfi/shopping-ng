import { Ingredient } from './../../shared/ingredient.model';
import { EventEmitter } from '@angular/core';
import { Component, ElementRef, ViewChild, Output } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef : ElementRef;
  @ViewChild('amountInput') amountInputRef : ElementRef;
  @Output() ingredientAdded = new EventEmitter<{name: string, amount:number}>();

  onAddItem(){
    const itemName = this.nameInputRef.nativeElement.value;
    const itemAmount = this.amountInputRef.nativeElement.value;
    const newItem = new Ingredient(itemName, itemAmount);

    this.ingredientAdded.emit(newItem);
  }

}
