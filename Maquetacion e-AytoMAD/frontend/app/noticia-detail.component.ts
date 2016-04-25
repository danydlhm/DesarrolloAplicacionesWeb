import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Noticia, NoticiaService}   from './noticia.service';

@Component({
    template: `
<div class="col-lg-12 text-center">
  <h2>Noticia "{{noticia.title}}"</h2>
  <h4>Noticia "{{noticia.subtitle}}"</h4>
  <img src="{{noticia.url}}" alt="Imagen asociada a la noticia" style="width:150px;height:250px;">
  <hr>
  <div>
    <p>{{noticia.abstract}}</p>
  </div>
  <p>
    <button (click)="removeNoticia()">Remove</button>
    <button (click)="editNoticia()">Edit</button>
    <br>
    <button (click)="gotoNoticias()">All Noticias</button>
  </p>
</div>
  `
})
export class NoticiaDetailComponent {

    noticia: Noticia;

    constructor(private router: Router, routeParams: RouteParams, private service: NoticiaService) {
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
                _ => this.router.navigate(['Noticias']),
                error => console.error(error)
            )
        }
    }

    editNoticia() {
        this.router.navigate(['NoticiaEdit', { id: this.noticia.id }]);
    }

    gotoNoticias() {
        this.router.navigate(['Noticias']);
    }
}
