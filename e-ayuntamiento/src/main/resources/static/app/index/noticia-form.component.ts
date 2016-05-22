import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Noticia, NoticiaService}   from './noticia.service';

@Component({
  template: `
  <h2>Noticia "{{noticia.title}}"</h2>
  <h4>Noticia "{{noticia.subtitle}}"</h4>
  <div *ngIf="noticia.id">
    <label>Id: </label>{{noticia.id}}</div>
  <div>
    <label>Title: </label>
    <input [(ngModel)]="noticia.title" placeholder="title"/>
  </div>
  <div>
    <label>SubTitle: </label>
    <input [(ngModel)]="noticia.subtitle" placeholder="subtitle"/>
  </div>
  <div>
    <label>Abstract: </label>
    <textarea [(ngModel)]="noticia.cuerpo" placeholder="cuerpo"></textarea>
  </div>
  <div>
    <label>Imagen: </label>
    <input type="image" src="img_submit.gif" alt="Submit"> 
    <textarea [(ngModel)]="noticia.url" placeholder="abstract"></textarea>
  </div>
  <p>
    <button class="btn btn-primary" (click)="cancel()">Cancelar</button>
    <button class="btn btn-primary" (click)="save()">Salvar</button>
  </p>`
})
export class NoticiaFormComponent {

  newNoticia: boolean;
  noticia: Noticia;

  constructor(
    private _router:Router,
    routeParams:RouteParams,
    private service: NoticiaService){

      let id = routeParams.get('id');
      if(id){
        service.getNoticia(id).subscribe(
          noticia => this.noticia = noticia,
          error => console.error(error)
        );
        this.newNoticia = false;
      } else {
        this.noticia = {title: '', subtitle: '', cuerpo: '', url: ''};
        this.newNoticia = true;
      }
  }

  cancel() {
    window.history.back();
  }

  save() {
    if (this.newNoticia){
        this.service.saveNoticia(this.acta).subscribe(
    	   acta => {}, 
    	   error => console.error('Error creating new noticia: '+error)
        );
    }else{
        this.service.updateNoticia(this.noticia).subscribe(
    	   acta => {}, 
    	   error => console.error('Error updating noticia: '+error)
        );
    }
    window.history.back();
  }
}
