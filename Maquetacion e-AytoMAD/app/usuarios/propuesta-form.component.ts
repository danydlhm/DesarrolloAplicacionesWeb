import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Propuesta, PropuestaService}   from './propuesta.service';

@Component({
  template: `
  <h2>Nueva Propuesta "{{propuesta.titulo}}"</h2>
  <div *ngIf="propuesta.id"><label>Id: </label>{{propuesta.id}}</div>
  <div>
    <label>Autor: </label>
    <input [(ngModel)]="propuesta.creador" placeholder="autor"/>
  </div>
  <div>
    <label>Titulo: </label>
    <input [(ngModel)]="propuesta.title" placeholder="titulo"/>
  </div>
  <div>
    <label>Contenido: </label>
    <textarea [(ngModel)]="propuesta.contenido" placeholder="contenido"></textarea>
  </div>
  <div>
    <label>Imagen: </label>
    <input type="file" name="pic" accept="image/*">
  </div>
  <p>
    <button (click)="cancel()">Cancelar</button>
    <button (click)="save()">Guardar</button>
  </p>`
})
export class PropuestaFormComponent {

  newPropuesta: boolean;
  propuesta: Propuesta;

  constructor(
    private _router:Router,
    routeParams:RouteParams,
    private service: PropuestaService){

      let id = routeParams.get('id');
      if(id){
        service.getPropuesta(id).subscribe(
          propuesta => this.propuesta = propuesta,
          error => console.error(error)
        );
        this.newPropuesta = false;
      } else {
        this.propuesta = new Propuesta(undefined,'',false,undefined,undefined,'','','');
        this.newPropuesta = true;
      }
  }

  cancel() {
    window.history.back();
  }

  save() {
    this.service.savePropuesta(this.propuesta);
    window.history.back();
  }
}
