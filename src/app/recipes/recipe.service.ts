import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply test description',
      'https://www.bbcgoodfoodme.com/assets/legacy/recipe/recipe-image/2019/03/hassleback_roast_lamb.jpg',
      [new Ingredient('Meat', 1), new Ingredient('French fries', 20)]
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply test description',
      'https://www.bbcgoodfoodme.com/assets/legacy/recipe/recipe-image/2019/03/hassleback_roast_lamb.jpg',
      [new Ingredient('Buns', 2), new Ingredient('Meat', 1)]
    ),
  ];

  constructor(private shoppingListService: ShoppingListService) {

  }

  getRecipes() {
    // We got a copy here not a direct ref on our private recipes list
    return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
