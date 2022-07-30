import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  toActive: number = 0;
  toInactive: number = 0;

  statusChange(active: boolean){
    if (active) {
      this.toActive++;
      console.log('Inactive to Active: ' + this.toActive);
    }
    else{
      this.toInactive++;
      console.log('Active to Inactive: ' + this.toInactive);
    }
  }
  constructor() { }
}
