import {Component}  from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {NavComponent} from './nav.component';

@Component({
    directives: [ROUTER_DIRECTIVES, NavComponent],
    templateUrl: 'app/usuarios/administradorTemplate.html',
})


export class AdministradorComponent implements OnInit{
    private tabs = [true,true];
    private active = 0;
    
    ngOnInit(){
        if (this.tabs.length > 0){
            this.tabs[0] = false;
        }
    }
    
    setVisible(tab:number){
        this.tabs[this.active] = true;
        this.active = tab;
        console.log(this.tabs.length);
        this.tabs[this.active] = false;
    }

}