import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TimeInterval} from "rxjs";

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalStarted = new EventEmitter<number>();
  interval!: number;
  i = 0;


  constructor() { }

  ngOnInit(): void {
  }

  Start(){
    this.interval = setInterval(() => {
      this.i++;
      this.intervalStarted.emit(this.i);}, 1000)
  }

  Stop(){
    clearInterval(this.interval);
  }
}
