import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  styles: [`
    h3 {
      color: #7dfdd2;
    }
  `]
})
export class AppComponent {
  name = 'Behnjamin';
}
