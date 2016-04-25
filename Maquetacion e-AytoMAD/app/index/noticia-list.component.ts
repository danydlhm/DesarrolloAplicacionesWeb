import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Noticia, NoticiaService}   from './noticia.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
    <div class="row">
        <div class="col-lg-12 text-center">
            <h2 class="section-heading">Noticias</h2>
            <h3 class="section-subheading text-muted">Conoce todo lo que sucede cerca de ti</h3>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-4 text-center" *ngFor="#noticia of noticias">
                <a [routerLink]="['NoticiaDetail', {id: noticia.id}]">
                    <div>
                        <div>
                            <i class="fa fa-plus fa-3x"></i>
                        </div>
                    </div>
                    <img src="{{noticia.url}}" class="img-responsive center-block" alt="foto descriptiva de la noticia">
                </a>
                <div>
                    <h4>"{{noticia.title}}"</h4>
                    <p class="text-muted">"{{noticia.subtitle}}"</p>
                </div>
        </div>
    </div>
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
