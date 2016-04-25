import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Acta, ActaService}   from './acta.service';

@Component({
  template: `
  <div *ngIf="acta.id">
    <label>Id: </label>{{acta.id}}</div>
  <div>
    <label>Dia de la Semana: </label>
    <input [(ngModel)]="acta.diaSemana" placeholder="dia de la semana"/>
  </div>
  <div>
    <label>Dia del Mes: </label>
    <input [(ngModel)]="acta.dia" placeholder="dia del mes"/>
  </div>
  <div>
    <label>Mes: </label>
    <input [(ngModel)]="acta.mes" placeholder="mes"/>
  </div>
  <div>
    <label>Año: </label>
    <input [(ngModel)]="acta.year" placeholder="año"/>
  </div>
  <div>
    <label>Contenido: </label>
    <textarea [(ngModel)]="acta.contenido" placeholder="contenido"></textarea>
  </div>
  <p>
    <button (click)="cancel()">Cancel</button>
    <button (click)="save()">Save</button>
  </p>`
})
export class ActaFormComponent {

  newActa: boolean;
  acta: Acta;

  constructor(
    private _router:Router,
    routeParams:RouteParams,
    private service: ActaService){

      let id = routeParams.get('id');
      if(id){
        service.getActa(id).subscribe(
          acta => this.acta = acta,
          error => console.error(error)
        );
        this.newActa = false;
      } else {
        this.acta = new Acta(undefined,'',undefined,'',undefined,'');
        this.newActa = true;
      }
  }

  cancel() {
    window.history.back();
  }

  save() {
    this.service.saveActa(this.acta);
    window.history.back();
  }
}
