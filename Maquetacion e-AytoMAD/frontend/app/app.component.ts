import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {IndexComponent} from './index.component';

@Component({
  selector: 'app',
  templateUrl: 'app/appTemplate.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/index', name: 'Index', component: IndexComponent, useAsDefault: true},
])
export class AppComponent { }
