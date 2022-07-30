import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe.modal";
import {RecipeService} from "../recipe.service";

@Component({
  selector: 'app-recipe-info',
  templateUrl: './recipe-info.component.html',
  styleUrls: ['./recipe-info.component.css']
})
export class RecipeInfoComponent implements OnInit {
  @Input() recipe: Recipe;

  AddToShoppingList(){
    this.recipeService.addIngredientsToList(this.recipe.ingredients);
  }

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

}
