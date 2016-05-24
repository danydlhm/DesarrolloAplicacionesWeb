import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Noticia, NoticiaService}   from './noticia.service';
import {LoginService}   from './login.service';

@Component({
    template: `
<div class="col-lg-12 text-center" *ngIf="noticia">
  <h2>Noticia "{{noticia.title}}"</h2>
  <h4>Noticia "{{noticia.subtitle}}"</h4>
  <img src="{{noticia.url}}" alt="Imagen asociada a la noticia" style="width:150px;height:250px;">
  <hr>
  <div>
    <p>{{noticia.cuerpo}}</p>
  </div>
  <p>
    <button class="btn btn-primary" *ngIf="loginService.user && loginService.isAdmin" (click)="removeNoticia()">Eliminar</button>
    <button class="btn btn-primary" *ngIf="loginService.user && loginService.isAdmin" (click)="editNoticia()">Editar</button>
    <br>
    <button class="btn btn-primary" (click)="gotoIndex()">Atrás</button>
  </p>
</div>
  `
})
export class NoticiaDetailComponent {

    noticia: Noticia;

    constructor(private router: Router, routeParams: RouteParams, private service: NoticiaService, private loginService: LoginService) {
        let id = routeParams.get('id');
        service.getNoticia(id).subscribe(
            noticia => this.noticia = noticia,
            error => console.error(error)
        );
    }

    removeNoticia() {
        let okResponse = window.confirm("Do you want to remove this noticia?");
        if (okResponse) {
            this.service.removeNoticia(this.noticia).subscribe(
                _ => window.history.back();,
                error => console.error(error)
            )
        }
    }

    editNoticia() {
        this.router.navigate(['AdminNewsEdit', { id: this.noticia.id }]);
    }

    gotoIndex() {
        window.history.back();;
    }
}
