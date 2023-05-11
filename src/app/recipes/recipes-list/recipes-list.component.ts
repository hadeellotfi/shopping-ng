import { RecipeService } from './../recipe.service';
import { EventEmitter } from '@angular/core';
import { Component, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent {
   recipes: Recipe[];

   constructor(private recipeService: RecipeService) {
    this.recipes = recipeService.getRecipes();
   }

   @Output() recipeWasSelected = new EventEmitter<Recipe>();
   
   onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
   }
}
