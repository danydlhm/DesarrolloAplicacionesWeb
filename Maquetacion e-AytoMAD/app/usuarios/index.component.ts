import {Component}  from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';

@Component({
    directives: [ROUTER_DIRECTIVES]
    templateUrl : 'app/usuarios/indexTemplate.html'
})

export class ConcejalIndexComponent {
    private selected = 0;
    
    setSelected (sel:number){
        this.selected = sel;
    }
}