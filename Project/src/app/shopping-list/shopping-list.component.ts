import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.modal'
import {ShoppingListService} from "./shopping-list.service";

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{
  ingredients: Ingredient[] = [];

  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shoppinglistService.getIngredients();
    this.shoppinglistService.ingredientsAdded.subscribe((ingredients: Ingredient[]) => {this.ingredients = ingredients});
  }

}
