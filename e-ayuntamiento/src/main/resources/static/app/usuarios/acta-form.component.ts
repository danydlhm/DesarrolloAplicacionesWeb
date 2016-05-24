import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Acta, ActaService}   from '../index/acta.service';

@Component({
  template: `
  <div class="container modal-body">
        <div class="col-lg-8 col-lg-offset-2 text-center " *ngIf="acta">
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
            <button class="btn btn-primary" (click)="cancel()">Cancel</button>
            <button class="btn btn-primary" (click)="save()">Save</button>
          </p>
        </div>
    </div>
  `
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
        this.service.getActa(id).subscribe(
          acta => this.acta = acta,
          error => console.error(error)
        );
        this.newActa = false;
      } else {
        this.acta = {diaSemana: '', dia: undefined, mes: '', year: undefined, contenido: ''};
        this.newActa = true;
      }
  }

  cancel() {
    window.history.back();
  }

  save() {
    if (this.newActa){
        this.service.saveActa(this.acta).subscribe(
    	   acta => {}, 
    	   error => console.error('Error creating new acta: '+error)
        );
    }else{
        this.service.updateActa(this.acta).subscribe(
    	   acta => {}, 
    	   error => console.error('Error creating new acta: '+error)
        );
    }
    window.history.back();
  }
}
