import { Injectable, EventEmitter} from '@angular/core';
import { Ingredient } from '../shared/Ingredient.modal';
import {Recipe} from "./recipe.modal";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('Test Recipes',
      'This is for testing purposes',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png',
      [new Ingredient('Ingredient', 1),
                 new Ingredient('Ingredient', 2)]
    ),
    new Recipe('Test Recipes 2',
      'This is for testing purposes 2',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png',
      [new Ingredient('Ingredient 2', 1),
        new Ingredient('Ingredient 2', 2)])
  ];

  getRecipes(){
    //returns a copy
    return this.recipes.slice();
  }

  addIngredientsToList(ingredients:Ingredient[]){
    this.shoppinglistSerive.addItem(ingredients)
  }
  constructor(private shoppinglistSerive:ShoppingListService) { }
}
