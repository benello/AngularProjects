import {Component, EventEmitter, Output} from "@angular/core";

@Component({
  selector: 'app-head',
  templateUrl: './header.component.html'
})

export class HeaderComponent{
  @Output() featureSelected = new EventEmitter<number>();

  onSelect(menuItem: number){
    this.featureSelected.emit(menuItem);
  }

}
