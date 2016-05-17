import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';

@Component({
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/index/logginTemplate.html',
})

export class LogginComponent{
    private user:string;
    
    constructor(private router:Router){}
    
    goto(){
        if (this.user==='admin'){
            this.router.navigate(['Administrador']);
        }
        if (this.user==='concejal'){
            this.router.navigate(['Ciudadano']);
        }
    }
    
    goSup(){
        this.router.navigate(['SignUp']);
    }
}