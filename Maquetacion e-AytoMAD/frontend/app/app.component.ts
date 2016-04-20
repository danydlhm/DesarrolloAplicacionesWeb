import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {IndexComponent} from './index.component';
import {CiudadanoComponent} from './ciudadano.component';
import {FooterComponent} from './footer.component'

@Component({
  selector: 'app',
  templateUrl: 'app/appTemplate.html',
  directives: [ROUTER_DIRECTIVES, FooterComponent]
})
@RouteConfig([
  {path: '/index', name: 'Index', component: IndexComponent, useAsDefault: true},
  {path: '/usuario/concejal', name: 'Ciudadano', component: CiudadanoComponent},
])
export class AppComponent { }
