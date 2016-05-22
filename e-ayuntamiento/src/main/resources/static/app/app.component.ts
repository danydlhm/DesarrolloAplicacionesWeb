import {Component} from 'angular2/core';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FooterComponent} from './footer.component';
import {IndexComponent} from './index/index.component';
import {LogginComponent} from './index/loggin.component';
import {SignUpComponent} from './index/signUp.component';
import {CiudadanoComponent} from './usuarios/ciudadano.component';
import {PropuestaService} from './usuarios/propuesta.service';
import {AdministradorComponent} from './usuarios/administrador.component';
import {SpinnerComponent} from './spinner.component';
import {ConcejalService} from './index/concejal.service';
import {CarrouselService} from './index/carrousel.service';
import {ActaListComponent} from './index/acta-list.component';
import {ActaDetailComponent} from './index/acta-detail.component';
import {ActaFormComponent} from './index/acta-form.component';
import {ActaService} from './index/acta.service';
import {NoticiaDetailComponent} from './index/noticia-detail.component';
import {NoticiaService} from './index/noticia.service';
import {NoticiaListComponent} from './index/noticia-list.component';

@Component({
  selector: 'app',
  templateUrl: 'app/appTemplate.html',
  providers:  [HTTP_PROVIDERS,ConcejalService,CarrouselService,ActaService, NoticiaService, PropuestaService],
  directives: [ROUTER_DIRECTIVES, FooterComponent, SpinnerComponent]
})
@RouteConfig([
  {path: '/index', name: 'Index', component: IndexComponent, useAsDefault: true},
  {path: '/usuario/concejal/...', name: 'Ciudadano', component: CiudadanoComponent},
  /**{path: '/usuario/concejal/propuesta/:id', name: 'PropuestaDetail', component: PropuestaDetailComponent},
  {path: '/usuario/concejal/propuestas/', name: 'PropuestaList', component: PropuestaListComponent},
  {path: '/usuario/concejal/propuestas/nueva/', name: 'PropuestaNew', component: PropuestaFormComponent},*/
  {path: '/usuario/administrador', name: 'Administrador', component: AdministradorComponent},
  {path: '/usuario/administrador/noticias', name: 'AdminNews', component: NoticiaListComponent},
  {path: '/loggin', name: 'Loggin', component: LogginComponent}, 
  {path: '/signup', name: 'SignUp', component: SignUpComponent},
  {path: '/index/noticia/:id', name: 'NoticiaDetail', component: NoticiaDetailComponent},
  {path: '/index/acta/:id', name: 'ActaDetail', component: ActaDetailComponent},
  {path: '/index/acta/edit/:id', name: 'ActaForm', component: ActaFormComponent},
  {path: '/index/acta/', name: 'ActaList', component: ActaListComponent},
  {path: '/index/acta/nueva', name: 'NewActa', component: ActaFormComponent},
])
export class AppComponent { }