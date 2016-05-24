import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {withObserver} from '../utils';
import {Http, Response, RequestOptions, Headers} from 'angular2/http';
import 'rxjs/Rx';
import {User} from '../index/login.service';
import {Concejal} from '../index/concejal.service';

export interface Propuesta {

    id?: number;
    creador: User;
    aprobada: boolean;
    concejal: Concejal;
    firmantes: User[];
    titulo: string;
    contenido: string;
    imagen: string;
}

const URL = 'propuestas/';

@Injectable()
export class PropuestaService {

    constructor(private http: Http) { }

  getPropuestas() {
    return this.http.get(URL).map(
        response => response.json(),
    )
  }

  getPropuesta(id: number | string) {
    return this.http.get(URL+id)
        .map(response => response.json())
	       .catch(error => this.handleError(error));
  }

  removePropuesta(propuesta: Propuesta){
    let headers = new Headers({
	   'X-Requested-With': 'XMLHttpRequest'
	});
	let options = new RequestOptions({ headers });  
	  
    return this.http.delete(URL + propuesta.id, options)
      .map(response => undefined)
      .catch(error => this.handleError(error));
  }

  savePropuesta(propuesta: Propuesta){
    let body = JSON.stringify(propuesta);
    let headers = new Headers({
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.post(URL, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error)); 
  }
  
  updatePropuesta(propuesta: Propuesta) {
    if (propuesta.concejal){
        propuesta.concejal.propuestasAprobadas = [];
    };
    let body = JSON.stringify(propuesta);
    let headers = new Headers({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.put(URL + propuesta.id, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
    }

    private handleError(error: any){
      console.error(error);
      return Observable.throw("Server error (" + error.status + "): " + error.text())
    }
}