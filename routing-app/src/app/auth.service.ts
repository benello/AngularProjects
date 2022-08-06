import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;

  changeLoginStatus(status: boolean){
    this.loggedIn = status;
  }

  Authenticate(){
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    })
    return promise;
  }

  constructor() { }
}
