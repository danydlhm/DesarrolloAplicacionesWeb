import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Noticia, NoticiaService}   from './noticia.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
    <h2>Noticias</h2>
    <ul class="items">
      <li *ngFor="#noticia of noticias">
        <a [routerLink]="['NoticiaDetail', {id: noticia.id}]">{{noticia.title}}{{noticia.subtitle}}</a>
      </li>
    </ul>
    <button (click)="newNoticia()">New noticia</button>
  `
})
export class NoticiaListComponent implements OnInit {

    noticias: Noticia[];

    constructor(private router:Router, private service: NoticiaService) {}

    ngOnInit(){
      this.service.getNoticias().subscribe(
        noticias => this.noticias = noticias,
        error => console.log(error)
      );
    }

    newNoticia() {
      this.router.navigate(['NoticiaNew']);
    }
}
