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
import {NoticiaListComponent} from './index/noticia-list.component';
import {PropuestaListComponent} from './usuarios/propuesta-list.component';
import {PropuestaDetailComponent} from './usuario/propuesta-detail.component';
import {PropuestaFormComponent} from './usuarios/propuesta-form.component';

@Component({
  selector: 'app',
  templateUrl: 'app/appTemplate.html',
  providers:  [ConcejalService,CarrouselService,ActaService, NoticiaService],
  directives: [ROUTER_DIRECTIVES, FooterComponent, SpinnerComponent]
})
@RouteConfig([
  {path: '/index', name: 'Index', component: IndexComponent, useAsDefault: true},
  {path: '/usuario/concejal', name: 'Ciudadano', component: CiudadanoComponent},
  /**{path: '/usuario/concejal/propuesta/:id', name: 'PropuestaDetail', component: PropuestaDetailComponent},
  {path: '/usuario/concejal/propuestas/', name: 'PropuestaList', component: PropuestaListComponent},
  {path: '/usuario/concejal/propuestas/nueva/', name: 'PropuestaNew', component: PropuestaFormComponent},*/
  {path: '/usuario/administrador', name: 'Administrador', component: AdministradorComponent},
  {path: '/usuario/administrador/noticias', name: 'AdminNews', component: NoticiaListComponent},
  {path: '/loggin', name: 'Loggin', component: LogginComponent}, 
  {path: '/signup', name: 'SignUp', component: SignUpComponent},
  {path: '/index/noticia/:id', name: 'NoticiaDetail', component: NoticiaDetailComponent},
  {path: '/index/acta/:id', name: 'ActaDetail', component: ActaDetailComponent},
  {path: '/index/actas/', name: 'ActaList', component: ActaListComponent},
])
export class AppComponent { }