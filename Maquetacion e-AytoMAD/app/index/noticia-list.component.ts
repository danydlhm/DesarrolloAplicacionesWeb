import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Noticia, NoticiaService}   from './noticia.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
    <div class="row" margin : 1em;>
        <div class="col-md-4 col-sm-6 portfolio-item text-center" *ngFor="#noticia of noticias">
            <a [routerLink]="['NoticiaDetail', {id: noticia.id}]" class="portfolio-link">
                <div class="portfolio-hover">
                    <div class="portfolio-hover-content">
                        <i class="fa fa-plus fa-3x"></i>
                    </div>
                </div>
                <img src="{{noticia.url}}" class="img-responsive center-block" alt="foto descriptiva de la noticia">
            </a>
            <div class="portfolio-caption">
                <h4>"{{noticia.title}}"</h4>
                <p class="text-muted">"{{noticia.subtitle}}"</p>
            </div>
        </div>
    </div>
    <button class="btn btn-primary" (click)="newNoticia()">Nueva noticia</button>
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
