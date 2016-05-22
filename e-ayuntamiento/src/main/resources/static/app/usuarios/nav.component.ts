import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {LoginService} from '../index/login.service'

@Component({
    selector: 'nav-tool',
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/usuarios/navTemplate.html',
})

export class NavComponent{

    constructor(private router:Router, private loginService: LoginService){}

    
    logOut(){
        this.loginService.logOut().subscribe(
            response => this.router.navigate(['Index']);, 
            error => console.log("Error when trying to log out: "+error)
        );
    }

}