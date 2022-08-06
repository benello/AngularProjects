import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: any = {id:0, name:'', status:''};
  paramsSubscription!: Subscription;

  constructor(private serversService: ServersService, private route:ActivatedRoute, private router:Router) { }

  editServer(){
    this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'}) //queryParamshandling preserve keeps the params on new link
  }

  ngOnInit() {
    //this.server = this.serversService.getServer(+this.route.snapshot.params['id'])
    this.paramsSubscription = this.route.params.subscribe((params:Params) => {
      this.server = this.serversService.getServer(parseInt(params['id']));
    })
  }
}

