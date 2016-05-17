import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';

@Component({
    selector: 'load-div',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/spinnerTemplate.html',
})

export class SpinnerComponent{

}