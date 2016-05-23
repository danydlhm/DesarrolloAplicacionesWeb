import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Acta, ActaService}   from './acta.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
    <div class="container modal-body">
        <div class="col-lg-8 col-lg-offset-2 text-center ">
            <h2>Actas</h2>
            <ul class="items list-unstyled">
              <li *ngFor="#acta of actas">
                <a [routerLink]="['ActaDetail', {id: acta.id}]">Pleno del {{acta.diaSemana}} dia {{acta.dia}} del mes {{acta.mes}} del año {{acta.year}}</a>
              </li>

            </ul>
            <button class="btn btn-primary" (click)="gotoIndex()">Atrás</button>
        </div>
    </div>
  `
})
export class ActaListComponent implements OnInit {

    actas: Acta[];

    constructor(private router:Router, private service: ActaService) {}

    ngOnInit(){
      this.service.getActas().subscribe(
        actas => this.actas = actas,
        error => console.log(error)
      );
    }

    gotoIndex() {
      this.router.navigate(['Index']);
    }
}