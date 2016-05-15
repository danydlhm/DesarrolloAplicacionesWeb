import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Propuesta, PropuestaService}   from './propuesta.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
    <h2>Propuestas</h2>
    <ul class="items">
      <li *ngFor="#propuesta of propuestas">
        <a [routerLink]="['PropuestaDetail', {id: propuesta.id}]">{{propuesta.title}}</a>
      </li>
    </ul>
    <button (click)="newPropuesta()">Nueva Propuesta</button>
  `
})
export class PropuestaListComponent implements OnInit {

    propuestas: Propuesta[];

    constructor(private router:Router, private service: PropuestaService) {}

    ngOnInit(){
      this.service.getPropuestas().subscribe(
        propuestas => this.propuestas = propuestas,
        error => console.log(error)
      );
    }

    newPropuesta() {
      this.router.navigate(['PropuestaNew']);
    }
}
