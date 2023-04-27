import { EventEmitter } from '@angular/core';
import { Component, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
   recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply test description', 'https://www.bbcgoodfoodme.com/assets/legacy/recipe/recipe-image/2019/03/hassleback_roast_lamb.jpg')
   ];

   @Output() recipeWasSelected = new EventEmitter<Recipe>();
   
   onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
   }
}
