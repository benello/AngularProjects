import {Component} from "@angular/core";

@Component({
  selector: 'app-success',
  template: `
    <h2>Success Alert</h2>
    <app-warning></app-warning>
  `,
  styles: [`
    h2 {
      color: #0ed30e;
    }
  `]
})

export class SuccessComponent { }
