import {Ingredient} from "../shared/Ingredient.modal";

export class Recipe{
  public name: string;
  public desc: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(name: string, desc:string, imagePath:string, ingredients: Ingredient[]) {
    this.name = name;
    this.desc = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
