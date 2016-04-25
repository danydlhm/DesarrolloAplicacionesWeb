import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FooterComponent} from './footer.component';
import {IndexComponent} from './index/index.component';
import {LogginComponent} from './index/loggin.component';
import {SignUpComponent} from './index/signUp.component';
import {CiudadanoComponent} from './usuarios/ciudadano.component';
import {AdministradorComponent} from './usuarios/administrador.component';
import {SpinnerComponent} from './spinner.component';
import {ConcejalService} from './index/concejal.service';
import {CarrouselService} from './index/carrousel.service';
import {ActaListComponent} from './index/acta-list.component';
import {ActaDetailComponent} from './index/acta-detail.component';
import {ActaService} from './index/acta.service';
import {NoticiaDetailComponent} from './index/noticia-detail.component';
import {NoticiaService} from './index/noticia.service';

@Component({
  selector: 'app',
  templateUrl: 'app/appTemplate.html',
  providers:  [ConcejalService,CarrouselService,ActaService, NoticiaService],
  directives: [ROUTER_DIRECTIVES, FooterComponent, SpinnerComponent]
})
@RouteConfig([
  {path: '/index', name: 'Index', component: IndexComponent, useAsDefault: true},
  {path: '/usuario/concejal', name: 'Ciudadano', component: CiudadanoComponent},
  {path: '/usuario/administrador', name: 'Administrador', component: AdministradorComponent},
  {path: '/loggin', name: 'Loggin', component: LogginComponent}, 
  {path: '/signup', name: 'SignUp', component: SignUpComponent},
  {path: '/index/noticia/:id', name: 'NoticiaDetail', component: NoticiaDetailComponent},
  {path: '/index/acta/:id', name: 'ActaDetail', component: ActaDetailComponent},
  {path: '/index/acta/', name: 'ActaList', component: ActaListComponent},
])
export class AppComponent { }
