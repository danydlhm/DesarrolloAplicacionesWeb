import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Acta, ActaService}   from './acta.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
    <h2>Actas</h2>
    <ul class="items">
      <li *ngFor="#acta of actas">
        <a [routerLink]="['ActaDetail', {id: acta.id}]">Pleno del {{acta.diaSemana}} dia {{acta.dia}} del mes {{acta.mes}} del año {{acta.year}}</a>
      </li>
    </ul>
    <button (click)="newActa()">New acta</button>
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

    newActa() {
      this.router.navigate(['ActaNew']);
    }
}
