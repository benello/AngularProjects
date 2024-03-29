import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  onLoadServer(id: number){
    this.router.navigate(['/servers', id, 'edit'], {queryParams: {allowEdit: 1}, fragment: "loading"});
  }

  changeStatus(state: boolean){
      this.authService.changeLoginStatus(state);
  }

  constructor(private router:Router, private authService: AuthService) { }

  ngOnInit() {
  }

}
