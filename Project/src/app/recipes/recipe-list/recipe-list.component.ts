import { Component, OnInit } from '@angular/core';
import {Recipe} from "../recipe.modal";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipes', 'This is for testing purposes', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png'),
    new Recipe('Test Recipes 2', 'This is for testing purposes 2', 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Test-Logo.svg/783px-Test-Logo.svg.png')

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
