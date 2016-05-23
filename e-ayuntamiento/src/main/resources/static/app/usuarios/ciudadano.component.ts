import {Component}   from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {NavComponent} from './nav.component';
import {PropuestaListComponent} from './propuesta-list.component';
import {PropuestaDetailComponent} from './propuesta-detail.component';
import {PropuestaFormComponent} from './propuesta-form.component';
import {ConcejalIndexComponent} from './index.component';
 import {LoginService} from '../index/login.service';

@Component({
    directives: [ROUTER_DIRECTIVES, NavComponent],
    templateUrl: 'app/usuarios/ciudadanoTemplate.html',
})

@RouteConfig([
    {path: '/index', name: 'ConcejalIndex', component: ConcejalIndexComponent, useAsDefault: true},
    {path: '/propuesta/:id', name: 'PropuestaDetail', component: PropuestaDetailComponent},
    {path: '/propuestas/', name: 'PropuestaList', component: PropuestaListComponent},
    {path: '/propuestas/nueva/', name: 'PropuestaNew', component: PropuestaFormComponent},
])

export class CiudadanoComponent{
    
    constructor(private loginService: LoginService){}
    
}