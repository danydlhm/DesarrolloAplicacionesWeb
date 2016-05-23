import {Component}  from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {LoginService} from '../index/login.service';

@Component({
    directives: [ROUTER_DIRECTIVES]
    templateUrl : 'app/usuarios/indexTemplate.html'
})

export class ConcejalIndexComponent {
    private selected = 0;
    private tabs = [true,true];
    private active = 0;
    
    constructor(private loginService: LoginService){}
    
    ngOnInit(){
        if (this.tabs.length > 0){
            this.tabs[0] = false;
        }
    }
    
    setVisible(tab:number){
        this.tabs[this.active] = true;
        this.active = tab;
        this.tabs[this.active] = false;
    }
    
    setSelected (sel:number){
        this.selected = sel;
    }
}