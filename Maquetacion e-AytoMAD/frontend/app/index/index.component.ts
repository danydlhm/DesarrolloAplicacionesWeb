import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {ServicesComponent} from './services.component';
import {NewsComponent} from './news.component';
import {TurismComponent} from './turism.component';
import {ContactComponent} from './contact.component';
import {TeamComponent} from './team.component';
import {NavigationComponent} from './navigation.component';
import {ActaListComponent} from './acta-list.component';
import {ActaDetailComponent} from './acta-detail.component';
import {ActaFormComponent} from './acta-form.component';
import {ActaService} from './acta.service';
import {CarrouselService} from './carrousel.service';
import {ConcejalService} from './concejal.service';
import {NoticiaListComponent} from './noticia-list.component';
import {NoticiaDetailComponent} from './noticia-detail.component';
import {NoticiaFormComponent} from './noticia-form.component';
import {NoticiaService} from './noticia.service';


@Component({
    providers:  [ActaService, NoticiaService, CarrouselService, ConcejalService],
    directives: [ROUTER_DIRECTIVES, ServicesComponent, NewsComponent, TurismComponent, ContactComponent, TeamComponent,NavigationComponent],
    templateUrl: 'app/index/indexTemplate.html'
})

@RouteConfig([
  {path: '/index/noticia/:id', name: 'NoticiaDetail', component: NoticiaDetailComponent},
  {path: '/index/acta/:id', name: 'ActaDetail', component: ActaDetailComponent}
])

export class IndexComponent{}