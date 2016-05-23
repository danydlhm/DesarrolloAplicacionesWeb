import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Carrousel, CarrouselService}   from '../index/carrousel.service';

@Component({
  template: `
  <div class="container modal-body">
        <div class="col-lg-8 col-lg-offset-2 text-center " *ngIf="img">
          <div *ngIf="img.id">
            <label>Id: </label>{{img.id}}</div>
          <div>
            <label>Nombre: </label>
            <input [(ngModel)]="img.name" placeholder="nombre del lugar de la imagen"/>
          </div>
          <div>
            <label>Dia del Mes: </label>
            <input [(ngModel)]="img.foto" placeholder="dia del mes"/>
          </div>
          <p>
            <button class="btn btn-primary" (click)="cancel()">Cancel</button>
            <button class="btn btn-primary" (click)="save()">Save</button>
          </p>
        </div>
    </div>
  `
})
export class CarrouselFormComponent {

  newCarrousel: boolean;
  img: Carrousel;

  constructor(
    private _router:Router,
    routeParams:RouteParams,
    private service: CarrouselService){

      let id = routeParams.get('id');
      if(id){
        service.getImagen(id).subscribe(
          imagen => this.img = imagen,
          error => console.error(error)
        );
        this.newCarrousel = false;
      } else {
        this.img = {name: '', foto: "", active: false};
        this.newCarrousel = true;
      }
  }

  cancel() {
    window.history.back();
  }

  save() {
    if (this.newCarrousel){
        this.service.saveImagen(this.img).subscribe(
    	   img => {}, 
    	   error => console.error('Error creating new acta: '+error)
        );
    }else{
        this.service.updateImagen(this.img).subscribe(
    	   acta => {}, 
    	   error => console.error('Error creating new acta: '+error)
        );
    }
    window.history.back();
  }
}
