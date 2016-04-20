import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {ServicesComponent} from './services.component';
import {NewsComponent} from './news.component';
import {TurismComponent} from './turism.component';


@Component({
    directives: [ROUTER_DIRECTIVES, ServicesComponent, NewsComponent, TurismComponent],
    templateUrl: 'app/indexTemplate.html'
})

export class IndexComponent{

}