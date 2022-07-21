import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: 'servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = 'Untitled';
  serverCreationStatus = 'No server was created !';
  serverCreated = false;


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created ! Name is ' + this.serverName;
    this.serverCreated = true;
  }

  OnUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
