import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/Ingredient.modal";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInputRef: ElementRef;
  @ViewChild('amtInput', {static: false}) amtInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  addItem(){
    const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value, this.amtInputRef.nativeElement.value);
    this.ingredientAdded.emit(newIngredient);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
