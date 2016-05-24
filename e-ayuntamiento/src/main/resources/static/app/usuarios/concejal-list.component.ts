import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Concejal, ConcejalService}   from '../index/concejal.service';
import {User, LoginService} from '../index/login.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
    <div class="row">
        <div class="col-md-4 col-sm-6 portfolio-item text-center" *ngFor="#user of users">
            <a [routerLink]="['AdminConcejalView', {id: user.id}]" class="portfolio-link">
                <hr>
                <img src="{{user.foto}}" class="img-responsive img-rounded center-block" alt="foto descriptiva de {{user.name}}">
                <hr>
                <h5>{{user.nombre}}</h5>
                <div class="portfolio-caption" *ngIf="user.concejal">
                    <h6>{{user.concejal.descripcion}}</h6>
                </div>
            </a>
        </div>
    </div>
    <button class="btn btn-primary" (click)="gotoIndex()">Atrás</button>`,
})
export class ConcejalListComponent implements OnInit {

    users: Users[];

    constructor(private router:Router, private service: ConcejalService, private loginService: LoginService) {}

    ngOnInit(){
      this.loginService.getUsers().subscribe(
        users => this.users = users,
        error => console.log(error)
      );
    }

    
    gotoIndex() {
      this.router.navigate(['ConcejalIndex']);
    }
}
