import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is simply test description',
      'https://www.bbcgoodfoodme.com/assets/legacy/recipe/recipe-image/2019/03/hassleback_roast_lamb.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is simply test description',
      'https://www.bbcgoodfoodme.com/assets/legacy/recipe/recipe-image/2019/03/hassleback_roast_lamb.jpg'
    ),
  ];

  getRecipes() {
    // We got a copy here not a direct ref on our private recipes list
    return this.recipes.slice();
  }
}
