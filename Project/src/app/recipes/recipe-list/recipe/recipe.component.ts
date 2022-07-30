import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../../recipe.modal";
import {RecipeService} from "../../recipe.service";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {
  @Input() recipe!: Recipe;

  getRecipe(){
    this.recipeService.recipeSelected.emit(this.recipe);
  }

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

}
