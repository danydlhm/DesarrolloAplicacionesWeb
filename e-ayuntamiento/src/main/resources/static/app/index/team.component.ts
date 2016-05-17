import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Concejal, ConcejalService} from './concejal.service';

@Component({
    selector: 'team-section',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/index/teamTemplate.html',
})

export class TeamComponent implements OnInit{

    concejales: Concejal[];
    
    constructor(private router:Router, private service: ConcejalService) {}

    ngOnInit(){
      this.service.getConcejales().subscribe(
        concejales => this.concejales = concejales,
        error => console.log(error)
      );
    }
}