import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
    .white {
      color: white;
    }
  `]
})
export class AppComponent {
  showDetails = false;
  log:number[] = [];

  onShowDetails(){
    this.showDetails = true;
    this.log.push(this.log.length + 1);
  }
}
