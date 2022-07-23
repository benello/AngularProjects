import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/Ingredient.modal'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Banana', 5),
    new Ingredient('Strawberry', 20)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
