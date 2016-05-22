import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {LoginService} from './login.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    templateUrl: 'app/index/logginTemplate.html',
})

export class LogginComponent{
    
    constructor(private router:Router, private loginService: LoginService){}
    
    logIn(event: any, user: string, pass: string){
	  
	  event.preventDefault();
	  
	  this.loginService.logIn(user, pass).subscribe(
	      user => this.router.navigate(['Ciudadano']),
	      error => alert("Invalid user or password")
      );
    }
    
    goSup(){
        this.router.navigate(['SignUp']);
    }
}