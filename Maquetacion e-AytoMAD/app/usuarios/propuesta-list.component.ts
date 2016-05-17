import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Propuesta, PropuestaService}   from './propuesta.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
    <div class="container modal-body">
        <div class="col-lg-8 col-lg-offset-2 text-center">
            <h2>Propuestas</h2>
            <ul class="items list-unstyled">
              <li *ngFor="#propuesta of propuestas">
                <a [routerLink]="['PropuestaDetail', {id: propuesta.id}]">Propuesta nº{{propuesta.id}}: {{propuesta.titulo}}</a>
              </li>
            </ul>
            <button class="btn btn-primary" (click)="newPropuesta()">Nueva Propuesta</button>
            <button class="btn btn-primary" (click)="gotoIndex()">Atrás</button>
        </div>
    </div>
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
    
    gotoIndex() {
      this.router.navigate(['Index']);
    }
}
