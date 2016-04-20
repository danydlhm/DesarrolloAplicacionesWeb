import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {ServicesComponent} from './services.component';
import {NewsComponent} from './news.component';
import {TurismComponent} from './turism.component';
import {ContactComponent} from './contact.component';
import {TeamComponent} from './team.component';
import {NavigationComponent} from './navigation.component';


@Component({
    directives: [ROUTER_DIRECTIVES, ServicesComponent, NewsComponent, TurismComponent, ContactComponent, TeamComponent,NavigationComponent],
    templateUrl: 'app/indexTemplate.html'
})

export class IndexComponent{

}