import { Injectable, EventEmitter} from '@angular/core';
import {Ingredient} from "../shared/Ingredient.modal";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  ingredientsAdded = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Banana', 5),
    new Ingredient('Strawberry', 20)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addItem(newIngredients: Ingredient[]){
    for (let newIngredient of newIngredients){
      let found = false;
      for (let oldIngredient of this.ingredients){
        if (newIngredient.name == oldIngredient.name) {
          this.ingredients[this.ingredients.indexOf(oldIngredient)].amount = parseInt(newIngredient.amount.toString()) + parseInt(oldIngredient.amount.toString());
          found = true;
        }
      }
      if (!found){
        this.ingredients.push(newIngredient)
        found = false;
      }
    }
    //Splits the array to single objects
    //this.ingredients.push(...newIngredients);
    this.ingredientsAdded.emit(this.ingredients.slice());
  }

  constructor() { }
}
