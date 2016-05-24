import {Component}   from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {NavComponent} from './nav.component';
import {PropuestaListComponent} from './propuesta-list.component';
import {PropuestaDetailComponent} from './propuesta-detail.component';
import {PropuestaFormComponent} from './propuesta-form.component';
import {CarrouselListComponent} from './carrousel-list.component';
import {CarrouselFormComponent} from './carrousel-form.component';
import {ConcejalIndexComponent} from './index.component';
import {NoticiaListComponent} from './noticia-list.component';
import {NoticiaDetailComponent} from '../index/noticia-detail.component';
import {NoticiaFormComponent} from '../index/noticia-form.component';
import {LoginService} from '../index/login.service';
import {ActaListComponent} from './acta-list.component';
import {ActaFormComponent} from './acta-form.component';
import {ActaDetailComponent} from './acta-detail.component';
import {ConcejalListComponent} from './concejal-list.component';
import {ConcejalFormComponent} from './concejal-form.component';
import {ConcejalDetailComponent} from './concejal-detail.component';


@Component({
    directives: [ROUTER_DIRECTIVES, NavComponent],
    templateUrl: 'app/usuarios/ciudadanoTemplate.html',
})

@RouteConfig([
    {path: '/index', name: 'ConcejalIndex', component: ConcejalIndexComponent, useAsDefault: true},
    {path: '/propuesta/:id', name: 'PropuestaDetail', component: PropuestaDetailComponent},
    {path: '/propuesta/edit/:id', name: 'PropuestaEdit', component: PropuestaFormComponent},
    {path: '/propuestas/', name: 'PropuestaList', component: PropuestaListComponent},
    {path: '/propuestas/nueva/', name: 'PropuestaNew', component: PropuestaFormComponent},
    {path: '/carrousel/', name: 'CarrouselList', component: CarrouselListComponent},
    {path: '/carrousel/edit/:id', name: 'CarrouselEdit', component: CarrouselFormComponent},
    {path: '/carrousel/nueva/', name: 'CarrouselNew', component: CarrouselFormComponent},
    {path: '/news/', name: 'AdminNews', component: NoticiaListComponent},
    {path: '/news/:id', name: 'AdminNewsDetail', component: NoticiaDetailComponent},
    {path: '/news/edit/:id', name: 'AdminNewsEdit', component: NoticiaFormComponent},
    {path: '/news/nueva/', name: 'NoticiaNew', component: NoticiaFormComponent},
    {path: '/actas/', name: 'AdminActas', component: ActaListComponent},
    {path: '/actas/nueva/', name: 'AdminActaNew', component: ActaFormComponent},
    {path: '/acta/:id', name: 'AdminActaView', component: ActaDetailComponent},
    {path: '/acta/edit/:id', name: 'AdminActaEdit', component: ActaFormComponent},
    {path: '/concejales/', name: 'AdminConcejal', component: ConcejalListComponent},
    {path: '/concejal/:id', name: 'AdminConcejalView', component: ConcejalDetailComponent},
    
])

export class CiudadanoComponent{
    
    constructor(private loginService: LoginService){}
    
}