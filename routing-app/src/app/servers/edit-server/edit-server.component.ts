import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router} from '@angular/router';
import { ServersService } from '../servers.service';
import {CanDeactivateGuardService} from "./can-deactivate-guard.service";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanDeactivateGuardService {
  server: any ;
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changeSaved = false;

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit() {
    /*console.log(this.route.snapshot.queryParams)
    console.log(this.route.snapshot.fragment)
    */
    this.route.queryParams.subscribe( (queryParams: Params) => this.allowEdit = queryParams['allowEdit'] == '1' ? true : false);
    this.route.fragment.subscribe();
    this.server = this.serversService.getServer( parseInt(this.route.snapshot.params['id']));
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changeSaved  = true;
    this.router.navigate(['../'], {relativeTo: this.route}) //go back one path
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit){
      return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changeSaved){
      return confirm('Are you sure you want to exit without saving?');
    }
    else{
      return true;
    }
  }
}
