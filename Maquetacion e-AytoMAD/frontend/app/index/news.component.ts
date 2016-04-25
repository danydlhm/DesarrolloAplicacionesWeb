import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Noticia, NoticiaService} from './noticia.service';

@Component({
    selector: 'news-section',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/index/newsTemplate.html',
})

export class NewsComponent implements OnInit{

    noticias: Noticia[];
    
    constructor(private router:Router, private service: NoticiaService) {}

    ngOnInit(){
      this.service.getNoticias().subscribe(
        noticias => this.noticias = noticias,
        error => console.log(error)
      );
    }

}