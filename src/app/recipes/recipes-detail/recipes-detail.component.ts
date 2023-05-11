import { RecipeService } from './../recipe.service';
import { Recipe } from './../recipe.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css'],
})
export class RecipesDetailComponent {
  @Input() recipe: Recipe;

  constructor(private recipeService: RecipeService) {}

  onAddToShoppingList() {
    this.recipeService.addIngredientToShoppingList(this.recipe.ingredients);
  }
}
