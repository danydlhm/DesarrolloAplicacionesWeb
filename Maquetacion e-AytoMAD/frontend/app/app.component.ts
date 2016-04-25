import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {FooterComponent} from './footer.component';
import {IndexComponent} from './index/index.component';
import {LogginComponent} from './index/loggin.component';
import {SignUpComponent} from './index/signUp.component';
import {CiudadanoComponent} from './usuarios/ciudadano.component';
import {SpinnerComponent} from './spinner.component';
import {ConcejalService} from './index/concejal.service';
import {CarrouselService} from './index/carrousel.service';

@Component({
  selector: 'app',
  templateUrl: 'app/appTemplate.html',
  providers:  [ConcejalService,CarrouselService],
  directives: [ROUTER_DIRECTIVES, FooterComponent, SpinnerComponent]
})
@RouteConfig([
  {path: '/index', name: 'Index', component: IndexComponent, useAsDefault: true},
  {path: '/usuario/concejal', name: 'Ciudadano', component: CiudadanoComponent},
  {path: '/loggin', name: 'Loggin', component: LogginComponent}, 
  {path: '/signup', name: 'SignUp', component: SignUpComponent}, 
])
export class AppComponent { }
