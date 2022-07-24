import {Component, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNums: number[] = [];
  evenNums: number[] = [];

  test(e: any){
    console.log(e);

    if (e % 2 == 0){
      this.evenNums.push(e);
    }
    else{
      this.oddNums.push(e);
    }
  }
}
