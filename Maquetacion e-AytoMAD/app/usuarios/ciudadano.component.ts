import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {NavComponent} from './nav.component';

@Component({
    directives: [ROUTER_DIRECTIVES, NavComponent],
    templateUrl: 'app/usuarios/ciudadanoTemplate.html',
})

export class CiudadanoComponent{

}