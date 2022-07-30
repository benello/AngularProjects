import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ShoppingListService} from "../shopping-list.service";
import {Ingredient} from "../../shared/Ingredient.modal";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amtInput', {static: false}) amtInputRef: ElementRef;

  addItem(){
    const newIngredient = [new Ingredient(this.nameInputRef.nativeElement.value, this.amtInputRef.nativeElement.value)];
    this.shoppinglistService.addItem(newIngredient);
  }
  constructor(private shoppinglistService: ShoppingListService) { }

  ngOnInit(): void {
  }

}
