import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedMenuItem = 0;

  onNavigate(menuItem: number){
    this.loadedMenuItem = menuItem
  }
}
