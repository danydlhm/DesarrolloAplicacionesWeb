import {Component}  from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {ChatComponent} from './chat.component';
import {SpinnerComponent} from '../spinner.component';
import {NavComponent} from './nav.component';

@Component({
    directives: [ROUTER_DIRECTIVES, ChatComponent, SpinnerComponent, NavComponent],
    templateUrl: 'app/usuarios/administradorTemplate.html',
})

export class AdministradorComponent{

}