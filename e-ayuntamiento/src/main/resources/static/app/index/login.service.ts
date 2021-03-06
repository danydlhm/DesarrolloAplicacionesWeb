import {Injectable, OnInit} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from '../utils';
import {Http, Response, RequestOptions, Headers} from 'angular2/http';
import 'rxjs/Rx';

export interface User {  
    id?: number;
    name: string;
    nombre:string;
    foto:string;
    roles: string[];
    concejal: Concejal
    propuestasAprobadas: Propuestas[];
    propuestasCreadas: Propuestas[];
    propuestasFirmadas: Propuestas[];
}

@Injectable()
export class LoginService {
	
	isLogged = false;
	isAdmin = false;
	isConcejal = false;
	user: User;
	
	constructor(private http: Http){
		this.reqIsLogged();
	}
	
	reqIsLogged(){
		
		let headers = new Headers({
			'X-Requested-With': 'XMLHttpRequest'
		});
			
		let options = new RequestOptions({headers});		
		
		this.http.get('logIn', options).subscribe(
			response => this.processLogInResponse(response),
			error => {
				if(error.status != 401){
					console.error("Error when asking if logged: "+
						JSON.stringify(error));	
				}				
			}
		);
	}
	
	private processLogInResponse(response){
		this.isLogged = true;
		this.user = response.json();
		this.isAdmin = this.user.roles.indexOf("ROLE_ADMIN") !== -1;
		this.isConcejal = this.user.roles.indexOf("ROLE_CONCEJAL") !== -1;
	}
	
	logIn(user: string, pass: string) {
		
		let userPass = user + ":" + pass;
					
		let headers = new Headers({
			'Authorization': 'Basic '+utf8_to_b64(userPass),
			'X-Requested-With': 'XMLHttpRequest'
		});
			
		let options = new RequestOptions({headers});		
		
		return this.http.get('logIn', options).map(
			response => {
				this.processLogInResponse(response);
				return this.user;
			}
		);		
	}
	
	logOut(){
		
		return this.http.get('logOut').map(
			response => {
				this.isLogged = false;
				this.isAdmin = false;
                this.isConcejal = false;
				return response;
			}
		);
	}
    
    signUp(nick: String,name: String,pass: String, imagen: String){
        let user = {name: nick,nombre: name, passwordHash: pass, foto: imagen, roles: ['ROLE_USER']}
        let body = JSON.stringify(user);
        let headers = new Headers({
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        let options = new RequestOptions({ headers });
        console.log(user);

        return this.http.post('newUser', body, options)
          .map(response => response.json())
          .catch(error => this.handleError(error)); 
    }
    
    getUsers(){
        return this.http.get("/users").map(
            response => response.json(),
        )
    }
    getUser(id: number | string) {
    return this.http.get("/user/"+id)
        .map(response => response.json())
	       .catch(error => this.handleError(error));
    }
    
    updateUser(user: User) {

        let body = JSON.stringify(user);
        let headers = new Headers({
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest'
        });
        let options = new RequestOptions({ headers });

        return this.http.put("/user/" + user.id, body, options)
            .map(response => response.json())
            .catch(error => this.handleError(error));
    }
    
    private handleError(error: any){
      console.error(error);
      return Observable.throw("Server error (" + error.status + "): " + error.text())
    }
}

function utf8_to_b64(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode(<any>'0x' + p1);
    }));
}